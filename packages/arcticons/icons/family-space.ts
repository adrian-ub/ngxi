import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFamilySpaceIcon],svg[arcticons-family-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.265 3.957a21.294 21.294 0 0 1 25.623 8.288a21.29 21.29 0 0 1-2.99 26.762m-10.945 5.71A21.294 21.294 0 0 1 6.557 11.582"></svg:path><svg:circle cx="10.943" cy="6.795" r="2.662" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.955" cy="42.839" r="2.662" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="rotate(-89.912 33.955 42.838)"></svg:circle><svg:circle cx="36.388" cy="16.223" r="2.662" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.919 21.426a15.21 15.21 0 0 1-9.674 16.644a15.21 15.21 0 1 1 3.38-26.697"></svg:path><svg:circle cx="24.089" cy="20.774" r="2.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.41 30.386c-1.002.047-1.11-.393-1.143-.874v-1.983c2.804-3.289 11.062-2.874 13.266.067v1.647c-.09.383-.051.844-.562.975z"></svg:path>`,
})
export class ArcticonsFamilySpaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
