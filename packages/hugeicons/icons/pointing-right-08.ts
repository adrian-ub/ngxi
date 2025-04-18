import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPointingRight08Icon],svg[hugeicons-pointing-right-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 4.5h-6m6 0c0-.7-1.994-2.008-2.5-2.5M22 4.5c0 .7-1.994 2.008-2.5 2.5m-6.515 6.005h3.004m0 0h3.506c.831 0 1.505-.672 1.505-1.501c0-.83-.674-1.502-1.505-1.502h-5.464m1.958 3.003l-.027 1.055a2 2 0 0 1-.978 1.668m-.953-5.726H9.468m4.563 0l-2.76-2.594c-1.867-1.572-3.229-.746-3.985-.165L4.848 8.857C2.781 10.082 2 11.5 2 12.692v4.88c0 2.267 2.382 4.38 4.566 4.38l5.2.048a2 2 0 0 0 2.004-1.733l.19-1.54m-1.005-2.718h1.004c.375 0 .725-.103 1.025-.281m0 0l-.054 1.335a2 2 0 0 1-2.003 1.95h-1.004" color="currentColor"></svg:path>`,
})
export class HugeiconsPointingRight08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
