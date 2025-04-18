import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteCoathangerLineIcon],svg[mingcute-coathanger-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.5 7.5a1.5 1.5 0 1 1 2.084 1.382c-.544.23-1.281.747-1.512 1.58l-.01.007l-8.574 6.86c-1.107.886-.48 2.671.937 2.671h17.15c1.418 0 2.044-1.785.937-2.671l-8.217-6.573q.033-.017.069-.032A3.5 3.5 0 1 0 8.5 7.5a1 1 0 1 0 2 0m1.5 4.78L19.15 18H4.85z"></svg:path></svg:g>`,
})
export class MingcuteCoathangerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
