import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderGithubOpenIcon],svg[catppuccin-folder-github-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="m1.875 8l.686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#8087a2" d="M10 14.907c-1.5.5-1.25-.657-2-.907m5 1.5v-1.062c0-.447-.238-.67-.5-.938c1.225-.134 2.5-.58 2.5-2.633c0-.534-.205-.965-.569-1.348a1.9 1.9 0 0 0-.043-1.428s-.482-.134-1.532.58a5.3 5.3 0 0 0-2.712 0c-1.05-.714-1.531-.58-1.531-.58a1.9 1.9 0 0 0-.044 1.428c-.364.383-.568.814-.569 1.348c0 2.053 1.275 2.5 2.5 2.633c-.262.268-.544.58-.5.938V15.5"></svg:path></svg:g>`,
})
export class CatppuccinFolderGithubOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
