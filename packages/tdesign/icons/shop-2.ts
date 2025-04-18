import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShop2Icon],svg[tdesign-shop-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.982 5.11C6.409 3.397 8.684 2 12 2s5.591 1.397 7.018 3.11c1.06 1.27 1.655 2.72 1.879 3.89H22v2h-1v9h1v2H2v-2h1v-9H2V9h1.103c.224-1.17.82-2.62 1.879-3.89M5 11v9h3v-3a4 4 0 1 1 8 0v3h3v-9zm13.846-2a7 7 0 0 0-1.364-2.61A6.4 6.4 0 0 0 14.4 4.341q.272.481.512 1.011c.493 1.097.887 2.379 1.03 3.648zm-4.92 0a10.7 10.7 0 0 0-.838-2.827a9 9 0 0 0-.868-1.536q-.114-.159-.22-.286q-.106.127-.22.286c-.298.413-.6.939-.868 1.536A10.7 10.7 0 0 0 10.074 9zM8.058 9c.143-1.27.536-2.551 1.03-3.648q.239-.531.512-1.01A6.4 6.4 0 0 0 6.518 6.39A7 7 0 0 0 5.154 9zM14 20v-3a2 2 0 0 0-4 0v3z"></svg:path>`,
})
export class TdesignShop2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
