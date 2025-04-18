import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsReadabilityIcon],svg[ls-readability-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210 353v-1c-2-16-7-33-15-47c-7-12-17-23-28-31C181 152 285 58 410 58s228 94 242 216c-10 8-20 19-27 31c-8 14-14 31-16 47v1l-8 77c-57-36-123-55-191-55s-135 19-192 55zm-60 243L91 458c-50-1-91-43-91-93c0-52 42-94 94-94c34 0 64 18 80 46c7 11 11 24 13 38v1l29 269c0 5-4 11-9 11h-48c-5 0-9-6-9-11zm482-240v-1c2-14 6-27 13-38c16-28 46-46 80-46c52 0 94 42 94 94c0 50-41 92-91 93l-58 138v29c0 5-5 11-10 11h-48c-5 0-9-6-9-11zM232 566l-11-111c54-36 119-56 189-56s134 20 188 56l-11 111z"></svg:path>`,
})
export class LsReadabilityIcon {
  readonly viewBox = input("0 0 819 636")
  readonly width = input("1.29em")
  readonly height = input("1em")
}
