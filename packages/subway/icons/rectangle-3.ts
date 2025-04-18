import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayRectangle3Icon],svg[subway-rectangle-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M139.6 46.5h93.1V0h-93.1zM418.9 0v46.5h46.5V93H512V0zM46.5 46.5H93V0H0v93.1h46.5zM279.3 512h93.1v-46.5h-93.1zM46.5 139.6H0v93.1h46.5zm419 93.1H512v-93.1h-46.5zm0 139.7H512v-93.1h-46.5zm0 93.1H419V512h93v-93.1h-46.5zm-186.2-419h93.1V0h-93.1zM0 512h232.7V279.3H0z"></svg:path>`,
})
export class SubwayRectangle3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
