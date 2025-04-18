import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVideoConferenceLightIcon],svg[ph-video-conference-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 14v66h-52V54h50a2 2 0 0 1 2 2M38 200V56a2 2 0 0 1 2-2h114v148H40a2 2 0 0 1-2-2m178 2h-50v-68h52v66a2 2 0 0 1-2 2M182 88a10 10 0 1 1 10 10a10 10 0 0 1-10-10m20 80a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-68.19-1.49A38 38 0 0 0 115.23 143a30 30 0 1 0-38.45 0a38 38 0 0 0-18.59 23.5a6 6 0 0 0 11.62 3C72.67 158.38 83.93 150 96 150s23.34 8.38 26.19 19.49a6 6 0 0 0 11.62-3ZM78 120a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhVideoConferenceLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
