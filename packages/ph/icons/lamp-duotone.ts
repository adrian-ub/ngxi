import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLampDuotoneIcon],svg[ph-lamp-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 152H16L64 40h128Z" opacity=".2"></svg:path><svg:path d="m247.35 148.85l-48-112A8 8 0 0 0 192 32H64a8 8 0 0 0-7.35 4.85l-48 112A8 8 0 0 0 16 160h104v48H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-48h56v32a8 8 0 0 0 16 0v-32h32a8 8 0 0 0 7.35-11.15M28.13 144l41.15-96h117.44l41.15 96Z"></svg:path></svg:g>`,
})
export class PhLampDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
