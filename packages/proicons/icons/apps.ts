import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAppsIcon],svg[proicons-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="6.5" height="6.5" x="3.75" y="3.75" rx="2"></svg:rect><svg:path d="M15.586 3.818a2 2 0 0 1 2.828 0l1.768 1.768a2 2 0 0 1 0 2.828l-1.768 1.768a2 2 0 0 1-2.828 0l-1.768-1.768a2 2 0 0 1 0-2.828z"></svg:path><svg:rect width="6.5" height="6.5" x="3.75" y="13.75" rx="1.5"></svg:rect><svg:rect width="6.5" height="6.5" x="13.75" y="13.75" rx="2"></svg:rect></svg:g>`,
})
export class ProiconsAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
