import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFaceSmilingOffIcon],svg[pepicons-pop-face-smiling-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 17.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0 2a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19" clip-rule="evenodd"></svg:path><svg:path d="M8.5 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.5 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill-rule="evenodd" d="M14.447 12.106a1 1 0 0 1 .447 1.341L14 13l.894.448v.001l-.002.003l-.003.005l-.006.013a2 2 0 0 1-.077.135q-.073.122-.21.307a4.8 4.8 0 0 1-.846.869C12.96 15.412 11.743 16 10 16s-2.96-.588-3.75-1.22a4.8 4.8 0 0 1-.847-.867a4 4 0 0 1-.286-.443l-.006-.013l-.003-.005l-.001-.003c-.001-.001-.001-.002.893-.449l-.894.447a1 1 0 1 1 1.798-.88q.025.046.1.146c.098.13.26.317.496.506c.46.369 1.243.781 2.5.781s2.04-.412 2.5-.78a2.8 2.8 0 0 0 .497-.508a2 2 0 0 0 .114-.17a1 1 0 0 1 1.336-.437" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopFaceSmilingOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
