import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXVariableSquareIcon],svg[hugeicons-x-variable-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M16 9c-3.184 0-4.816 6.02-8 6.02"></svg:path><svg:path d="M15.54 15.02c-.809 0-1.253 0-1.594-.12a1.8 1.8 0 0 1-.52-.284c-.265-.21-.41-.509-.7-1.108l-1.451-2.995c-.29-.6-.436-.9-.7-1.108a1.8 1.8 0 0 0-.52-.284C9.712 9 9.268 9 8.46 9"></svg:path></svg:g>`,
})
export class HugeiconsXVariableSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
