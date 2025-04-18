import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolder03Icon],svg[hugeicons-folder-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.36 14.597c-.375-2.072-.563-3.108-.03-3.81q.054-.07.114-.135C3.037 10 4.087 10 6.186 10h11.628c2.1 0 3.15 0 3.742.652q.06.065.113.136c.534.701.346 1.737-.03 3.809c-.54 2.978-.81 4.467-1.828 5.382q-.104.095-.215.18c-1.08.841-2.59.841-5.608.841h-3.976c-3.019 0-4.528 0-5.608-.841a4 4 0 0 1-.215-.18c-1.018-.915-1.288-2.404-1.828-5.382M8.02 5.111h7.787c1.309 0 2.949-.188 3.79 1.037C20 6.737 20 8.361 20 10m-7.987-4.889l-.763-1.487c-.268-.522-.519-1.154-1.067-1.44C9.83 2 9.403 2 8.551 2c-2 0-3 0-3.668.545c-1.117.913-.857 2.785-.857 4.056V10" color="currentColor"></svg:path>`,
})
export class HugeiconsFolder03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
