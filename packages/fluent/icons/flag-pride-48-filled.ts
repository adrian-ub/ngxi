import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagPride48FilledIcon],svg[fluent-flag-pride-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#745125" d="M12 10h24v2H12z"></svg:path><svg:path fill="#E62C46" d="M12 12h24v2H12z"></svg:path><svg:path fill="#F36D38" d="M12 14h24v3H12z"></svg:path><svg:path fill="#FFD23E" d="M12 17h24v3H12z"></svg:path><svg:path fill="#61BC51" d="M12 20h24v3H12z"></svg:path><svg:path fill="#1793E8" d="M12 23h24v2H12z"></svg:path><svg:path fill="#B73FBB" d="M12 25h24v3H12z"></svg:path><svg:path d="M11.25 8C10.56 8 10 8.56 10 9.25v29.5a1.25 1.25 0 1 0 2.5 0V29h24.25c.69 0 1.25-.56 1.25-1.25V9.25C38 8.56 37.44 8 36.75 8h-25.5zM35.5 26.5h-23v-16h23v16z" fill="#212121"></svg:path></svg:g>`,
})
export class FluentFlagPride48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
