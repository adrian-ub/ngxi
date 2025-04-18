import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsGirl0105yOutline24pxIcon],svg[healthicons-girl-0105y-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 8.5A2.25 2.25 0 1 0 12 4a2.25 2.25 0 0 0 0 4.5"></svg:path><svg:path d="m16.5 16l-1.673-4.78c1.214-.242 2.144-.588 2.62-.826a1 1 0 1 0-.894-1.788c-.533.266-2.314.894-4.553.894c-2.24 0-4.02-.628-4.553-.894a1 1 0 1 0-.894 1.788c.476.238 1.406.584 2.62.825L7.5 16s2.972.5 4.5.5s4.5-.5 4.5-.5M9 17.25l2.5.25l-.323 1.616A1.1 1.1 0 0 1 9 18.902zm6 0l-2.5.25l.323 1.616A1.099 1.099 0 0 0 15 18.902z"></svg:path></svg:g>`,
})
export class HealthiconsGirl0105yOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
