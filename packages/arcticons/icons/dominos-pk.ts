import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDominosPkIcon],svg[arcticons-dominos-pk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m37.371 37.527l-1.958 2.472l1.958 2.488"></svg:path><svg:rect width="35.91" height="17.47" x="6.045" y="15.265" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".9" ry=".9" transform="rotate(-45 24 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.813 17.819l12.36 12.36"></svg:path><svg:circle cx="30.543" cy="17.449" r="2.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="21.843" cy="30.509" r="2.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.113" cy="30.509" r="2.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.986 42.492v-4.986h1.588c.898 0 1.626.75 1.626 1.674s-.728 1.675-1.626 1.675h-1.588m4.829-3.345v4.977m.598-2.488h-.598"></svg:path>`,
})
export class ArcticonsDominosPkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
