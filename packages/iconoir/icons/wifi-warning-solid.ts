import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWifiWarningSolidIcon],svg[iconoir-wifi-warning-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.756 6.94c3.192-2.444 6.612-3.69 10.243-3.69s7.051 1.246 10.244 3.69l.014.01l.013.011c.552.465.653 1.282.175 1.847L12.99 19.981a1.296 1.296 0 0 1-1.981 0L1.543 8.795l-.011-.014c-.44-.572-.364-1.392.224-1.842M12 7.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m.568 7.25a.75.75 0 0 0-1.115-1.003l-.01.011a.75.75 0 0 0 1.114 1.004z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirWifiWarningSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
