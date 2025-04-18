import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsCarthageIcon],svg[file-icons-carthage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256s256-114.615 256-256S397.385 0 256 0m3.665 435.032c-239.551.002-239.554-354.062-.003-354.064c13.358-.636 14.31 19.342.951 19.978c-212.816-.002-212.818 314.106-.003 314.108c13.407.634 12.462 20.613-.945 19.978m.005-42.271c-187.558.002-187.56-269.519-.003-269.52c13.27-.626 14.211 19.352.941 19.977c-159.475-.002-159.478 229.562-.003 229.564c13.874.65 12.939 20.629-.935 19.979m.926-63.673c13.22.607 12.302 20.586-.917 19.979c-126.903.002-126.906-182.131-.003-182.133c13.101-.606 14.025 19.372.923 19.978c-100.797-.002-100.8 142.174-.003 142.176"></svg:path>`,
})
export class FileIconsCarthageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
