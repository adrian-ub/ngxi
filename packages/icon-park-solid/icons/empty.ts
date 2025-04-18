import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidEmptyIcon],svg[icon-park-solid-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSEmpty0"><svg:g fill="none"><svg:g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-path="url(#ipSEmpty1)"><svg:path d="M9.438 42h3.185a2 2 0 0 0 1.868-1.286l2.2-5.753l.025-5.526c0-.116.011-.233.032-.348L20.152 10.3a2 2 0 0 0-1.968-2.357h-7.321a2 2 0 0 0-2 2.056l.523 18.871l-1.77 3.33a2 2 0 0 0 .269 2.266l.561.633l-.963 4.48A2 2 0 0 0 9.438 42Zm7.279-12.74l-7.331-.39M38.578 42h-3.18a2 2 0 0 1-1.878-1.313l-2.093-5.726l-.025-5.526c0-.117-.011-.233-.032-.348L27.965 10.3a2 2 0 0 1 1.968-2.357h7.322a2 2 0 0 1 2 2.055l-.523 18.872l1.771 3.33a2 2 0 0 1-.27 2.266l-.561.633l.87 4.523A2 2 0 0 1 38.578 42ZM31.4 29.26l7.331-.39"></svg:path></svg:g><svg:defs><svg:clippath id="ipSEmpty1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSEmpty0)"></svg:path>`,
})
export class IconParkSolidEmptyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
