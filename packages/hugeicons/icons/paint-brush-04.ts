import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPaintBrush04Icon],svg[hugeicons-paint-brush-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2.553a3 3 0 0 0 2.107 2.864l.787.246A3 3 0 0 1 20 12.527V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.473a3 3 0 0 1 2.106-2.864l.788-.246A3 3 0 0 0 10 6.553zM6.002 15c.156 1.308-.506 4.513-2.002 6.868c0 0 10.292 1.191 11.685-3.925v1.928c0 .942 0 1.412.293 1.705c.564.562 3.211.577 3.776-.024c.296-.316.267-.77.207-1.679c-.098-1.498-.368-3.417-1.109-4.873" color="currentColor"></svg:path>`,
})
export class HugeiconsPaintBrush04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
