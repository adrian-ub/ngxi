import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSanIcon],svg[material-icon-theme-san-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#01579B" d="M28 17.898L4 23.316V30l24-5.418Zm0-10.623L4 12.694v6.683l24-5.418Z"></svg:path><svg:path fill="#B3E5FC" d="M28 13.926L4 8.684V2l24 5.242Zm0 10.623L4 19.307v-6.684l24 5.242Z"></svg:path>`,
})
export class MaterialIconThemeSanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
