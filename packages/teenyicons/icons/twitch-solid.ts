import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTwitchSolidIcon],svg[teenyicons-twitch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.5 0a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h2v2.5a.5.5 0 0 0 .825.38L6.685 12H11.5a.5.5 0 0 0 .354-.146l3-3A.5.5 0 0 0 15 8.5v-8a.5.5 0 0 0-.5-.5zM10 8V3h1v5zM7 3v5h1V3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsTwitchSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
