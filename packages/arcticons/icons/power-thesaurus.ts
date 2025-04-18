import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPowerThesaurusIcon],svg[arcticons-power-thesaurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 4.5v3.545m0 3.546v3.545m0 3.546v3.545m0 3.546v3.545m0 3.546v3.545m0 3.546V43.5M24 8.045c6.27 0 11.92 3.887 14.32 9.85c2.399 5.961 1.073 12.823-3.36 17.386s-11.1 5.928-16.892 3.459C12.276 36.27 8.5 30.453 8.5 24"></svg:path><svg:circle cx="24" cy="24" r="5.318" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.682 38.986V43.5H8.5v-39h10.182v3.545H24v10.636h-5.318V24"></svg:path>`,
})
export class ArcticonsPowerThesaurusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
