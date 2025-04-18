import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserMultiple03Icon],svg[hugeicons-user-multiple-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.992 11.75a4.26 4.26 0 0 1-4.25-4.25a4.26 4.26 0 0 1 4.25-4.25a4.26 4.26 0 0 1 4.25 4.25a4.26 4.26 0 0 1-4.25 4.25m0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75M15.742 20c0 .41.34.75.75.75s.75-.34.75-.75v-2.03c0-1.65-.81-3.06-2.13-3.66c-3.07-1.38-7.16-1.39-10.24 0c-1.32.6-2.13 2-2.13 3.66V20c0 .41.34.75.75.75s.75-.34.75-.75v-2.03c0-.84.33-1.88 1.25-2.3c2.69-1.21 6.32-1.21 9 0c.92.43 1.25 1.47 1.25 2.3zm4 0c0 .41.34.75.75.75l.01-.01c.41 0 .75-.34.75-.75v-2.03c0-1.66-.82-3.06-2.13-3.65c-.28-.12-.57-.24-.87-.35a.74.74 0 0 0-.96.45c-.14.39.06.82.45.96c.25.1.5.2.75.31c.92.42 1.25 1.46 1.25 2.29zm-5.47-8.94c.1.33.4.54.72.54v.01q.105 0 .21-.03c1.82-.54 3.04-2.2 3.04-4.07s-1.25-3.55-3.04-4.08c-.39-.12-.81.1-.93.5c-.12.39.1.81.5.93a2.76 2.76 0 0 1 1.96 2.64c0 1.22-.79 2.28-1.96 2.63c-.39.12-.62.53-.5.93" color="currentColor"></svg:path>`,
})
export class HugeiconsUserMultiple03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
