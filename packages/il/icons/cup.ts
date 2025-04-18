import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilCupIcon],svg[il-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M371 5q76 0 144 12t118 32t79 47t29 59q-6 140-46 249q-17 47-44 91t-66 80t-92 56t-122 22q-70 0-123-22t-92-56t-66-80t-44-91Q6 295 0 155q0-31 29-59t80-47t118-32T371 5m247 162q8-4 8-12t-8-11q-33-17-95-32T371 97t-152 15t-96 32q-7 3-7 11t7 12q33 16 96 31t152 15t152-15t95-31"></svg:path>`,
})
export class IlCupIcon {
  readonly viewBox = input("0 0 750 800")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
