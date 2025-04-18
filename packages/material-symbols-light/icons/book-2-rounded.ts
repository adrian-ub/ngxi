import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBook2RoundedIcon],svg[material-symbols-light-book-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.616 21q-1.084 0-1.85-.766T5 18.384V6q0-1.258.871-2.129T8 3h9.385q.666 0 1.14.475T19 4.615v11.756q0 .156-.114.283q-.115.127-.309.192q-.523.137-.858.56t-.334.979q0 .536.325.962t.848.576q.215.073.329.213q.113.14.113.3v.058q0 .21-.144.358T18.5 21zm1.27-5.23q.212 0 .355-.145t.144-.356V4.5q0-.213-.144-.356Q9.097 4 8.884 4t-.356.144t-.144.356v10.77q0 .212.145.356t.356.143M7.615 20h9.364q-.285-.33-.44-.736t-.155-.88q0-.457.152-.87t.443-.745H7.616q-.689 0-1.152.472Q6 17.71 6 18.384q0 .689.464 1.152T7.616 20"></svg:path>`,
})
export class MaterialSymbolsLightBook2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
