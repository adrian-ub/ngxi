import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBoltOutlineRoundedIcon],svg[material-symbols-light-bolt-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zm-.396-4.2H7.169q-.407 0-.59-.355t.054-.681l5.629-8.155q.153-.215.38-.285t.48.022t.365.304t.082.463L12.866 11h3.586q.42 0 .595.383q.176.383-.095.71l-6.264 7.503q-.16.19-.386.243q-.227.052-.448-.047q-.221-.098-.338-.297q-.116-.199-.085-.45zm1.621-1.75"></svg:path>`,
})
export class MaterialSymbolsLightBoltOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
