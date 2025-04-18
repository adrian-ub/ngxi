import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSecureCommunicationOutlineIcon],svg[healthicons-secure-communication-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M28 35h1.5C37.508 35 44 28.508 44 20.5S37.508 6 29.5 6h-11C10.492 6 4 12.492 4 20.5s5 17 21.5 21l2.5.5zm-2 4.56V33h3.5C36.404 33 42 27.404 42 20.5C42 13.597 36.404 8 29.5 8h-11C11.596 8 6 13.597 6 20.5c0 3.57 1.106 7.334 4.061 10.679c2.967 3.357 7.924 6.435 15.871 8.368z" clip-rule="evenodd"></svg:path><svg:path d="M19 18h10v9H19z"></svg:path><svg:path fill-rule="evenodd" d="M25.067 14.769c-.226-.19-.597-.352-1.067-.352s-.841.161-1.067.352c-.222.187-.266.357-.266.46v2.688h2.666v-2.688c0-.103-.044-.273-.266-.46M24 12.417c1.841 0 3.333 1.259 3.333 2.812v4.688h-6.666v-4.688c0-1.553 1.492-2.812 3.333-2.812" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsSecureCommunicationOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
