import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCutDiamondIcon],svg[game-icons-cut-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m92.906 94.813l60.438 79.75l78.125-79.75H92.905zm189.25 0L359.25 173.5l58.688-78.688H282.155zm-25.344.843l-84.718 86.47H341.53zm177.907 7.906l-58.626 78.563H494.53zm-358.064.75l-57.78 77.813h116.78zm-58.5 96.5L226.562 429.22l-83.218-228.41H18.156zm145.063 0l93.593 256.844l93.593-256.844H163.22zm207.06 0L287.064 429.22l208.405-228.41H370.28z"></svg:path>`,
})
export class GameIconsCutDiamondIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
