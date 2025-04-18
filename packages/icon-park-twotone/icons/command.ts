import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCommandIcon],svg[icon-park-twotone-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCommand0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M9.455 14.91h5.454V9.454a5.455 5.455 0 1 0-5.454 5.454Zm0 18.18h5.454v5.455a5.455 5.455 0 1 1-5.454-5.454Z"></svg:path><svg:path stroke-linecap="round" d="M14.909 14.909h18.182v18.182H14.909z"></svg:path><svg:path fill="#555" d="M38.545 14.91h-5.454V9.454a5.455 5.455 0 1 1 5.454 5.454Zm0 18.18a5.455 5.455 0 1 1-5.454 5.455v-5.454z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCommand0)"></svg:path>`,
})
export class IconParkTwotoneCommandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
