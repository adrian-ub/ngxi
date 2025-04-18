import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginCurriculumSolidIcon],svg[bubbles-plugin-curriculum-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M6.5.5c-.197 0-.38.05-.562.125a1.5 1.5 0 0 0-.5.313a1.5 1.5 0 0 0-.313.5A1.5 1.5 0 0 0 5 2H2.75c-.597 0-1.172.234-1.594.656A2.25 2.25 0 0 0 .5 4.25v18c0 .597.234 1.172.656 1.594s.997.656 1.594.656h19.5c.597 0 1.172-.234 1.594-.656s.656-.997.656-1.594v-18c0-.597-.234-1.172-.656-1.594A2.25 2.25 0 0 0 22.25 2H12.5c0-.398-.156-.781-.437-1.062A1.5 1.5 0 0 0 11 .5zm-3.75 3H5v8.25a.74.74 0 0 0 1.188.594l2.562-1.906l2.563 1.906a.739.739 0 0 0 1.187-.594V3.5h9.75a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75v-18a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M5.75 18.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0-4.5a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5zm9-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"></svg:path></svg:g>`,
})
export class BubblesPluginCurriculumSolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
