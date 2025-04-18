import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsLaddersPlatformIcon],svg[game-icons-ladders-platform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M375 16v199h18v-14h46v14h18V16h-18v39h-46V16zm18 57h46v46h-46zm0 64h46v46h-46zM25 233v46h462v-46zm30 64v199h18v-39h46v39h18V297h-18v14H73v-14zm18 32h46v46H73zm0 64h46v46H73z"></svg:path>`,
})
export class GameIconsLaddersPlatformIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
