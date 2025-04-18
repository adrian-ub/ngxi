import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPassingIcon],svg[subway-passing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186.2 232.7h139.6v-46.5H186.2zm0 93.1h139.6v-46.5H186.2zm0 93.1h139.6v-46.5H186.2zm0 93.1h139.6v-46.5H186.2zm186.2-93.1H512v-46.5H372.4zm0 93.1H512v-46.5H372.4zm0-279.3H512v-46.5H372.4zm0-139.6v46.5H512V93.1zm0 232.7H512v-46.5H372.4zM0 232.7h139.6v-46.5H0zm0 93.1h139.6v-46.5H0zm0 93.1h139.6v-46.5H0zM0 46.5h139.6V0H0zm0 93.1h139.6V93.1H0zM0 512h139.6v-46.5H0z"></svg:path>`,
})
export class SubwayPassingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
