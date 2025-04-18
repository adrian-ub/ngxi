import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMaximize04Icon],svg[hugeicons-maximize-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.106 10.319l.803-4.671c.133-.774-.37-1.512-1.125-1.648c-.754-.137-1.474.38-1.607 1.154l-1.605 9.342l-.133.724l-1.797-1.91a1.51 1.51 0 0 0-2.302.131a1.65 1.65 0 0 0-.03 1.966l2.755 3.812c.625.865.938 1.297 1.314 1.633c.574.513 1.262.87 2.002 1.039c.485.11 1.006.11 2.048.11h1.817a5 5 0 0 0 4.907-4.046l.746-3.818l.08-.467c.133-.774-.37-1.512-1.125-1.649c-.754-.136-1.473.38-1.606 1.154l-.08.468m-5.062-3.324l-.24 1.401m.24-1.401c.133-.774.852-1.29 1.607-1.154c.754.136 1.258.874 1.124 1.648l-.16.934m0 0l-.08.467m.08-.467c.133-.774.852-1.29 1.606-1.154s1.258.874 1.125 1.648l-.08.467M9.875 4.619s.245-2.224 0-2.466m0 0c-.319-.315-2.54-.05-2.54-.05m2.54.05L6.902 5.099M2.11 7.352s-.246 2.223 0 2.466m0 0c.318.314 2.54.05 2.54.05m-2.54-.05l2.97-2.946" color="currentColor"></svg:path>`,
})
export class HugeiconsMaximize04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
