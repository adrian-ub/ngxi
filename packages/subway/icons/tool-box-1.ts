import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayToolBox1Icon],svg[subway-tool-box-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.3 85.3H42.7C19.1 85.3 0 104.5 0 128v21.3h512V128c0-23.5-19.1-42.7-42.7-42.7m-256-42.6h85.3V64h42.7V42.7c0-23.5-19.1-42.7-42.7-42.7h-85.3c-23.5 0-42.7 19.1-42.7 42.7V64h42.7zM0 426.7c0 23.5 19.1 42.7 42.7 42.7h426.7c23.5 0 42.7-19.1 42.7-42.7v-21.3H0zm0-64h512V192H0z"></svg:path>`,
})
export class SubwayToolBox1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
