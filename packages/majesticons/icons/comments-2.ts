import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsComments2Icon],svg[majesticons-comments-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 14v-1a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3"></svg:path><svg:path fill="currentColor" d="M12 11h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.64A1.36 1.36 0 0 0 17 20.36a.68.68 0 0 1-1.16.48l-1.254-1.254A2 2 0 0 0 13.172 19H12a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></svg:path></svg:g>`,
})
export class MajesticonsComments2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
