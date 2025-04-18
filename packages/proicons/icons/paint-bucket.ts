import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPaintBucketIcon],svg[proicons-paint-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m18.677 13.35l-1.923 3.17c-.985 2.093 1.314 4.206 3.317 3.05a2.36 2.36 0 0 0 .864-3.225z"></svg:path><svg:path stroke-linecap="round" d="m8.778 3.558l6.972 6.972M8.778 3.558L4.38 7.956c-.901.9-1.352 1.351-1.52 1.87a2.3 2.3 0 0 0-.112.704m6.03-6.972l-1.06-1.059m8.032 8.031l-4.398 4.398c-.9.9-1.351 1.351-1.871 1.52c-.457.149-.95.149-1.406 0c-.52-.169-.97-.62-1.871-1.52L4.38 13.104c-.901-.9-1.352-1.351-1.52-1.87a2.3 2.3 0 0 1-.112-.704m13.002 0H2.748m10.188 9.971H3.748"></svg:path></svg:g>`,
})
export class ProiconsPaintBucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
