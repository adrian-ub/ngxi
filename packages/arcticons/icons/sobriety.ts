import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSobrietyIcon],svg[arcticons-sobriety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.22 19.008l-1.271.622l-.645 1.26l-.622-1.271l-1.26-.645l1.27-.622l.646-1.26l.622 1.271z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.175 12.591c-9.205.475-15.744 3.052-15.687 6.117c.112 5.977 10.267 5.77 11.024 9.33c.773 3.634-4.655 7.238-10.121 7.356c-6.056.13-9.566-.599-9.566-2.281s4.239-4.43 13.313-4.946"></svg:path>`,
})
export class ArcticonsSobrietyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
