import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecureCommunicationNegativeIcon],svg[healthicons-secure-communication-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM18.5 6C10.492 6 4 12.492 4 20.5s5 17 21.5 21l2.5.5v-7h1.5C37.508 35 44 28.508 44 20.5S37.508 6 29.5 6z" clip-rule="evenodd"></svg:path><svg:path d="M19 18h10v9H19z"></svg:path><svg:path fill-rule="evenodd" d="M25.067 14.769c-.226-.19-.597-.352-1.067-.352s-.841.161-1.067.352c-.222.187-.266.357-.266.46v2.688h2.666v-2.688c0-.103-.044-.273-.266-.46M24 12.417c1.841 0 3.333 1.259 3.333 2.812v4.688h-6.666v-4.688c0-1.553 1.492-2.812 3.333-2.812" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSecureCommunicationNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
