import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftDuotoneIcon],svg[ph-arrow-elbow-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m96 80l-72 72V80Z" opacity=".2"></svg:path><svg:path d="M237.66 90.34a8 8 0 0 0-11.32 0L136 180.69L71.31 116l30.35-30.34A8 8 0 0 0 96 72H24a8 8 0 0 0-8 8v72a8 8 0 0 0 13.66 5.66L60 127.31l70.34 70.35a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 0-11.32M32 132.69V88h44.69Z"></svg:path></svg:g>`,
})
export class PhArrowElbowLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
