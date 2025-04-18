import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDominosMxIcon],svg[arcticons-dominos-mx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.002 42.493v-4.995l2.5 5l2.5-4.992v4.993m1.293-4.993l3.213 4.986m.001-4.986l-3.214 4.986"></svg:path><svg:rect width="35.91" height="17.47" x="6.045" y="15.265" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".9" ry=".9" transform="rotate(-45 24 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.813 17.819l12.36 12.36"></svg:path><svg:circle cx="30.543" cy="17.449" r="2.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.843" cy="30.509" r="2.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.112" cy="30.509" r="2.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDominosMxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
