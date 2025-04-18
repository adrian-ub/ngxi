import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXVariableCircleIcon],svg[hugeicons-x-variable-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 8.99c-3.184 0-4.816 6.02-8 6.02"></svg:path><svg:path d="M15.54 15.01c-.809 0-1.253 0-1.594-.12a1.8 1.8 0 0 1-.52-.285c-.265-.209-.41-.508-.7-1.108l-1.451-2.995c-.29-.6-.436-.899-.7-1.108a1.8 1.8 0 0 0-.52-.284c-.342-.12-.786-.12-1.595-.12"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class HugeiconsXVariableCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
