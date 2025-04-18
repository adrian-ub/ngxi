import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayUpload2Icon],svg[subway-upload-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.5 419.9h93.1V233.7h139.6L257 1L70.8 233.7h139.6v186.2zm256-46.5v93.1h-419v-93.1H1V513h512V373.4z"></svg:path>`,
})
export class SubwayUpload2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
