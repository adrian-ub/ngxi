import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRouterIcon],svg[mdi-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m1-7v3h2l-3 3l-3-3h2v-3m-6 0h3v2l3-3l-3-3v2H5m6 0V8H9l3-3l3 3h-2v3m6 0h-3V9l-3 3l3 3v-2h3"></svg:path>`,
})
export class MdiRouterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
