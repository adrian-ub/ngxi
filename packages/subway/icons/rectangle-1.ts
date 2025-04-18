import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayRectangle1Icon],svg[subway-rectangle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46.5 279.3H0v93.1h46.5zM279.3 46.5h93.1V0h-93.1zm0 465.5h93.1v-46.5h-93.1zM46.5 418.9H0V512h93.1v-46.5H46.5zm93.1 93.1h93.1v-46.5h-93.1zM418.9 0v46.5h46.5V93H512V0zm46.6 232.7H512v-93.1h-46.5zm0 232.8H419V512h93v-93.1h-46.5zm0-93.1H512v-93.1h-46.5zM0 232.7h232.7V0H0z"></svg:path>`,
})
export class SubwayRectangle1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
