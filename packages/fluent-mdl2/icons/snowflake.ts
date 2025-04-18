import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SnowflakeIcon],svg[fluent-mdl2-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1871 1276l33 124l-200 53l53 201l-124 33l-63-237l-546-315v631l173 173l-90 90l-147-146l-147 146l-90-90l173-173v-631l-546 315l-63 237l-124-33l53-201l-200-53l33-124l237 63l546-315l-546-315l-237 63l-33-124l200-53l-53-201l124-33l63 237l546 315V282L723 109l90-90l147 146l147-146l90 90l-173 173v631l546-315l63-237l124 33l-53 201l200 53l-33 124l-237-63l-546 315l546 315z"></svg:path>`,
})
export class FluentMdl2SnowflakeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
