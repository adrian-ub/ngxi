import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPenIcon],svg[gg-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M21.264 2.293a1 1 0 0 0-1.415 0l-.872.872a3 3 0 0 0-3.415.587L4.955 14.358l5.657 5.657L21.22 9.41a3 3 0 0 0 .586-3.415l.873-.873a1 1 0 0 0 0-1.414zm-4.268 8.51l-6.384 6.384l-2.828-2.829l6.383-6.383zm1.818-1.818l.99-.99a1 1 0 0 0 0-1.415l-1.413-1.414a1 1 0 0 0-1.415 0l-.99.99z" clip-rule="evenodd"></svg:path><svg:path d="m2 22.95l2.122-7.778l5.656 5.657z"></svg:path></svg:g>`,
})
export class GgPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
