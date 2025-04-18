import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2NewsIcon],svg[fluent-mdl2-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 512v896q0 53-20 99t-55 81t-82 55t-99 21H249q-51 0-96-20t-79-53t-54-79t-20-97V256h1792v256zm-128 128h-128v704q0 26-19 45t-45 19t-45-19t-19-45V384H128v1031q0 25 9 47t26 38t39 26t47 10h1543q27 0 50-10t40-27t28-41t10-50zm-384 0H256V512h1280zm0 768h-512v-128h512zm0-256h-512v-128h512zm0-256h-512V768h512zm-640 512H256V765h640zm-512-128h384V893H384z"></svg:path>`,
})
export class FluentMdl2NewsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
