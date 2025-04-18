import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiRailwaycarIcon],svg[fxemoji-railwaycar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#575A5B" d="M112 424c0 26.51-21.49 48-48 48s-48-21.49-48-48m104 0c0 26.51 21.49 48 48 48s48-21.49 48-48m80 0c0 26.51 21.49 48 48 48s48-21.49 48-48m8 0c0 26.51 21.49 48 48 48s48-21.49 48-48"></svg:path><svg:path fill="#009E83" d="M502 64.678V64H12v.277L0 88v312h512V88z"></svg:path><svg:path fill="#F9F9F7" d="M416 113h-95.981L256 177.019L191.981 113H0v120h96.993L256 392.001L415.01 233H512V113z"></svg:path><svg:path fill="#132028" d="M512 496H0v-32h512zm0-96H0v32h41.371c3.295 9.32 12.18 16 22.629 16s19.334-6.68 22.629-16h58.742c3.295 9.32 12.18 16 22.629 16s19.334-6.68 22.629-16h130.742c3.295 9.32 12.18 16 22.629 16s19.334-6.68 22.629-16h58.742c3.295 9.32 12.18 16 22.629 16s19.334-6.68 22.629-16H512zM374 204h106v-64H374zm-114 0h106v-64H260zm-114 0h106v-64H146zm-114 0h106v-64H32zm342 134h106v-64H374zm-114 0h106v-64H260zm-114 0h106v-64H146zm-114 0h106v-64H32z"></svg:path>`,
})
export class FxemojiRailwaycarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
