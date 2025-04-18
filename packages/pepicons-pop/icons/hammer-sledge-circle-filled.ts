import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopHammerSledgeCircleFilledIcon],svg[pepicons-pop-hammer-sledge-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopHammerSledgeCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.033 3.555a2 2 0 0 1 1.225.43l6.863 5.416a2 2 0 0 1 .703 1.091l.19.774a2 2 0 0 1-.371 1.717l-2.492 3.158a2 2 0 0 1-1.584.76l-.796-.005a2 2 0 0 1-1.225-.43L8.683 11.05a2 2 0 0 1-.703-1.09l-.19-.774a2 2 0 0 1 .371-1.718l2.492-3.157a2 2 0 0 1 1.584-.761zm6.85 7.416l-6.864-5.416l-.796-.005L9.73 8.707l.19.773l6.864 5.416l.796.006l2.492-3.158z"></svg:path><svg:path d="m12.028 13.061l-5.262 6.668l.785.62l5.262-6.669l1.57 1.24l-5.262 6.667a2 2 0 0 1-2.809.331l-.785-.62a2 2 0 0 1-.33-2.808l5.26-6.668zm4.491-5.691l.93-1.178l.784.62l-.93 1.177l1.571 1.239l.93-1.178a2 2 0 0 0-.332-2.809l-.785-.619a2 2 0 0 0-2.809.331l-.93 1.178z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopHammerSledgeCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopHammerSledgeCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
