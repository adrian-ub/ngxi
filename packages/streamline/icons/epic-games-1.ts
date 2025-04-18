import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEpicGames1Icon],svg[streamline-epic-games-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.223 1.429c0-.513.37-.929.825-.929h9.903c.456 0 .826.416.826.929v8.247c0 .352-.177.673-.456.83L7 13.5l-5.32-2.993c-.28-.158-.457-.48-.457-.83z"></svg:path><svg:path d="M8.394 7.202H5.61V2.56h2.785M5.609 4.88h2.785M5.143 9.457l1.858.929l1.857-.929"></svg:path></svg:g>`,
})
export class StreamlineEpicGames1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
