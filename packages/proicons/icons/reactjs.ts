import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsReactjsIcon],svg[proicons-reactjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.013c-5.385 0-9.75 1.785-9.75 3.987s4.365 3.987 9.75 3.987s9.75-1.785 9.75-3.987S17.385 8.013 12 8.013"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.423 10.006c-2.692-4.704-6.407-7.625-8.298-6.524c-1.89 1.101-1.24 5.807 1.452 10.512c2.692 4.704 6.408 7.625 8.298 6.524s1.24-5.807-1.452-10.512"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.423 13.994c2.693-4.705 3.343-9.41 1.452-10.512c-1.89-1.1-5.606 1.82-8.298 6.524s-3.342 9.41-1.452 10.512c1.89 1.1 5.606-1.82 8.298-6.524"></svg:path><svg:circle cx="12" cy="12" r="1.5" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsReactjsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
