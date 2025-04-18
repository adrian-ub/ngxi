import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillStarIcon],svg[quill-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.546 4.984a.5.5 0 0 1 .908 0l3.097 6.714a.5.5 0 0 0 .395.287l7.341.87a.5.5 0 0 1 .28.864l-5.427 5.02a.5.5 0 0 0-.15.464l1.44 7.251a.5.5 0 0 1-.735.534l-6.45-3.611a.5.5 0 0 0-.49 0l-6.45 3.61a.5.5 0 0 1-.735-.533l1.44-7.251a.5.5 0 0 0-.15-.465l-5.428-5.02a.5.5 0 0 1 .28-.863l7.342-.87a.5.5 0 0 0 .396-.287z"></svg:path>`,
})
export class QuillStarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
