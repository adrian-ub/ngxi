import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPhotoCircleFilledIcon],svg[pepicons-pop-photo-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopPhotoCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M11 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M9.697 13.082a1 1 0 0 1 1.606 0l1.91 2.572a1 1 0 0 1-.804 1.596H8.591a1 1 0 0 1-.803-1.596z"></svg:path><svg:path fill-rule="evenodd" d="m10.5 14.517l-.916 1.233h1.832zm.803-1.435a1 1 0 0 0-1.606 0l-1.91 2.572a1 1 0 0 0 .804 1.596h3.818a1 1 0 0 0 .803-1.596z" clip-rule="evenodd"></svg:path><svg:path d="M13.494 12.123a1 1 0 0 1 1.512 0l3.007 3.472a1 1 0 0 1-.756 1.655h-6.014a1 1 0 0 1-.756-1.655z"></svg:path><svg:path fill-rule="evenodd" d="m14.25 13.541l-1.913 2.209h3.826zm.756-1.418a1 1 0 0 0-1.512 0l-3.007 3.472a1 1 0 0 0 .756 1.655h6.014a1 1 0 0 0 .756-1.655z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.5 6.5v13h13v-13zm-.5-2A1.5 1.5 0 0 0 4.5 6v14A1.5 1.5 0 0 0 6 21.5h14a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 20 4.5z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopPhotoCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopPhotoCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
