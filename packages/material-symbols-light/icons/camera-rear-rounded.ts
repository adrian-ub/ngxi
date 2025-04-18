import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraRearRoundedIcon],svg[material-symbols-light-camera-rear-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.808 17q-.343 0-.576-.232T6 16.192V4.616q0-.667.475-1.141T7.615 3h8.77q.666 0 1.14.475T18 4.615v11.577q0 .344-.232.576t-.576.232h-4.1q-.24 0-.472-.098q-.23-.099-.391-.256l-.742-.742q-.459-.46-1.136-.46q-.678 0-1.138.46l-.742.742q-.16.157-.392.256q-.23.098-.471.098zm5.191-10.192q-.651 0-1.113.463t-.463 1.115t.464 1.113T12 9.961t1.114-.463t.462-1.114t-.463-1.114t-1.115-.462M11.242 19.5H6.5q-.213 0-.356-.144T6 18.999t.144-.356t.356-.143h4.742l-1.246-1.246q-.16-.16-.16-.354t.16-.354t.354-.16t.354.16l1.888 1.888q.237.237.237.566t-.237.565l-1.888 1.889q-.16.16-.354.16t-.354-.16t-.16-.354t.16-.354zm3.258 0q-.213 0-.356-.144T14 18.999t.144-.356t.356-.143h3q.213 0 .356.144t.144.357t-.144.356t-.356.143z"></svg:path>`,
})
export class MaterialSymbolsLightCameraRearRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
