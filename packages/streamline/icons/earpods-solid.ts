import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEarpodsSolidIcon],svg[streamline-earpods-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.46.707a3.15 3.15 0 0 0-1.742-.523a3.146 3.146 0 0 0-3.145 3.145v9.217a1.31 1.31 0 0 0 2.621 0V6.475q.262.024.524 0c.623 0 1.229-.183 1.742-.524c.238-.157.355-.436.355-.721V1.428c0-.285-.117-.564-.354-.722ZM.54.707A3.15 3.15 0 0 1 2.281.184a3.146 3.146 0 0 1 3.145 3.145v9.217a1.31 1.31 0 0 1-2.621 0V6.475q-.262.024-.524 0A3.15 3.15 0 0 1 .539 5.95c-.237-.156-.354-.435-.354-.72V1.429c0-.285.117-.564.354-.722Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineEarpodsSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
