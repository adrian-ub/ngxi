import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopFileLoopCircleFilledIcon],svg[pepicons-pop-file-loop-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopFileLoopCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 7a2.5 2.5 0 0 1 2.5-2.5h5.1a1 1 0 0 1 .702.288l4.4 4.333a1 1 0 0 1 .298.712V17a2.5 2.5 0 0 1-2.5 2.5H12a1 1 0 1 1 0-2h6.5a.5.5 0 0 0 .5-.5v-6.167h-2.4a2 2 0 0 1-2-2V6.5h-4.1a.5.5 0 0 0-.5.5v1.5a1 1 0 0 1-2 0zm8.6.888l.96.945h-.96z"></svg:path><svg:path d="M11.049 11.678a2.193 2.193 0 1 0-2.058 3.873a2.193 2.193 0 0 0 2.058-3.873m-4.732-.031a4.193 4.193 0 1 1 2.674 6.033l-1.676 3.155a1 1 0 0 1-1.767-.938l1.677-3.155a4.195 4.195 0 0 1-.908-5.095"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopFileLoopCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopFileLoopCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
