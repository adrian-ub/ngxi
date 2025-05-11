import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinSvelteIcon],svg[catppuccin-svelte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.86 6.72s1.39-1.98.08-3.87C11.286.763 9.44 1.6 9.44 1.6S6.15 3.35 4.33 4.59c-1.4 1-2.24 2.26-1.03 4.37c1.22 2.1 4.58 1.21 4.58 1.21"></svg:path><svg:path d="M3.14 9.28s-1.39 1.98-.08 3.87c1.31 1.9 3.5 1.24 3.5 1.24s3.29-1.74 5.11-2.98c1.4-1 2.24-2.26 1.03-4.37c-1.22-2.1-4.58-1.21-4.58-1.21M6.3 6.96l4.14-2.56m-4.92 7.25L9.66 9.1"></svg:path></svg:g>`,
})
export class CatppuccinSvelteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinSvelteConfigIcon],svg[catppuccin-svelte-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#f5a97f" d="M9.92 5.32s1.26-1.83.07-3.58C8.79 0 6.8.6 6.8.6s-3 1.6-4.65 2.75C.88 4.28.13 5.44 1.23 7.39C2.33 9.33 5.39 8.5 5.39 8.5m-4.3-.82S-.19 9.51 1 11.26C2.21 13 4.2 12.4 4.2 12.4s1.76-.94 3.32-1.9m2.79-3a3.36 3.36 0 0 0-.53-1.89C8.67 3.67 5.61 4.5 5.61 4.5M3.96 5.54l3.76-2.36M3.25 9.87L7 7.5"></svg:path><svg:path stroke="#8087a2" d="M11.5 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1.75-4l1.75 3l-1.75 3h-3.5L8 12.5l1.75-3z"></svg:path></svg:g>`,
})
export class CatppuccinSvelteConfigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinSvgIcon],svg[catppuccin-svg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="m4.54 10l6.92-4m-6.92 4a1.5 1.5 0 1 0-2.6 1.5a1.5 1.5 0 0 0 2.6-1.5M8 4v8m0-8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M4.54 6l6.92 4M4.54 6a1.5 1.5 0 1 0-2.6-1.5A1.5 1.5 0 0 0 4.54 6M8 12a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m3.46-2a1.5 1.5 0 1 0 2.6 1.5a1.5 1.5 0 0 0-2.6-1.5m0-4a1.5 1.5 0 1 0 2.6-1.5a1.5 1.5 0 0 0-2.6 1.5"></svg:path>`,
})
export class CatppuccinSvgIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinSwiftIcon],svg[catppuccin-swift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M14.34 10.2c.34-1.08 1.1-5.07-4.45-8.62a.48.48 0 0 0-.6.07a.44.44 0 0 0-.02.6c.03.02 2.07 2.5 1.34 5.34c-1.26-.86-6.24-4.81-6.24-4.81L7.25 7.5L1.9 4.05S5.68 8.7 8 10.45c-1.12.4-3.56.82-6.78-1.18a.48.48 0 0 0-.58.06a.44.44 0 0 0-.08.56c.11.18 2.7 4.36 8.14 4.36c1.5 0 2.37-.42 3.08-.77c.43-.2.77-.37 1.14-.37c.93 0 1.54.92 1.54.93c.1.14.27.22.44.21a.46.46 0 0 0 .4-.28c.67-1.55-.49-3.2-.96-3.78h0Z"></svg:path>`,
})
export class CatppuccinSwiftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinSymlinkIcon],svg[catppuccin-symlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M15.5 6.5v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2m0-9c0-1.1.9-2 2-2h4.01m-.01 0l5 5h-4a1 1 0 0 1-1-1z"></svg:path><svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="M.5 14.503V10.79c0-1.539 1.175-2.786 2.625-2.786H7"></svg:path><svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L7.125 8L4.5 5.5"></svg:path>`,
})
export class CatppuccinSymlinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTailwindIcon],svg[catppuccin-tailwind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#7dc4e4" stroke-linecap="round" stroke-linejoin="round" d="M8 2.5q-3 0-3.75 3.33C5 4.73 5.88 4.31 6.87 4.58c.58.16.98.62 1.43 1.13c.74.83 1.6 1.79 3.45 1.79q3 0 3.75-3.33c-.75 1.1-1.63 1.52-2.63 1.25c-.57-.16-.97-.62-1.42-1.13C10.7 3.46 9.85 2.5 8 2.5m-3.75 6q-3 0-3.75 3.33c.75-1.1 1.63-1.52 2.63-1.25c.57.16.97.62 1.42 1.13c.74.83 1.6 1.79 3.45 1.79q3 0 3.75-3.33c-.75 1.1-1.63 1.52-2.62 1.25c-.58-.16-.98-.62-1.43-1.13c-.74-.83-1.6-1.79-3.45-1.79"></svg:path>`,
})
export class CatppuccinTailwindIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTaskfileIcon],svg[catppuccin-taskfile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#7dc4e4" stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.752L8 15.5l-6.5-3.752l.002-7.5L8 .5l6.5 3.752zM1.5 4.25L8 8m6.5-3.75L8 8m.003 0v7.5"></svg:path>`,
})
export class CatppuccinTaskfileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTauriIcon],svg[catppuccin-tauri-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#eed49f" d="M4.73 4.02a4.64 4.64 0 1 1 5.55 6.56"></svg:path><svg:path stroke="#91d7e3" d="M7.5 10a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path><svg:path stroke="#91d7e3" d="M11.26 12a4.64 4.64 0 1 1-5.63-6.55"></svg:path><svg:path stroke="#eed49f" d="M9.5 6a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path></svg:g>`,
})
export class CatppuccinTauriIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTauriIgnoreIcon],svg[catppuccin-tauri-ignore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.73 4.02a4.64 4.64 0 1 1 5.55 6.56M7.5 10a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path><svg:path d="M11.26 12a4.64 4.64 0 1 1-5.63-6.55M9.5 6a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path></svg:g>`,
})
export class CatppuccinTauriIgnoreIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTerraformIcon],svg[catppuccin-terraform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="m1.5 6l8 4.25l4-2.25m-12-2V1.5l8 4.25l4-2.25V8m-4-2.25v8.75M5.53 3.82L5.5 12.5l4 2"></svg:path>`,
})
export class CatppuccinTerraformIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTextIcon],svg[catppuccin-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 6.5v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h4.01"></svg:path><svg:path d="m8.5 1.5l5 5h-4a1 1 0 0 1-1-1zm-3 10h5m-5-3h5m-5-3h1"></svg:path></svg:g>`,
})
export class CatppuccinTextIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTodoIcon],svg[catppuccin-todo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 8A6.5 6.5 0 0 1 8 14.5A6.5 6.5 0 0 1 1.5 8A6.5 6.5 0 0 1 8 1.5A6.5 6.5 0 0 1 14.5 8"></svg:path><svg:path d="m4.5 7.5l2.5 3l4.5-5"></svg:path></svg:g>`,
})
export class CatppuccinTodoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTomlIcon],svg[catppuccin-toml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ee99a0" stroke-linecap="round" stroke-linejoin="round" d="M3.5 1.5h-2v13h2m9-13h2v13h-2m-8-11h7v3h-2v6h-3v-6h-2z"></svg:path>`,
})
export class CatppuccinTomlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTurboIcon],svg[catppuccin-turbo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="8" cy="8" r="4.5" stroke="#cad3f5"></svg:circle><svg:path stroke="#ee99a0" stroke-linecap="round" stroke-linejoin="round" d="M9.58 14.3a6.5 6.5 0 0 1-4.55-.52"></svg:path><svg:path stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M8.52 1.52a6.5 6.5 0 0 1 5.84 5.12"></svg:path><svg:path stroke="#ee99a0" stroke-linecap="round" stroke-linejoin="round" d="M13.91 10.7a6.5 6.5 0 0 1-2.78 3"></svg:path><svg:path stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M14.38 6.76a6.5 6.5 0 0 1-.42 3.83"></svg:path><svg:path stroke="#ee99a0" stroke-linecap="round" stroke-linejoin="round" d="M3.63 12.8a6.5 6.5 0 0 1-2.1-4.14"></svg:path></svg:g>`,
})
export class CatppuccinTurboIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTwigIcon],svg[catppuccin-twig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M.502 7C.876 6.703 1.87 6.356 3 6.513c.724.118 1.466.309 2.507 1.058c.52.374.896.867 1.493 1.429m1.985 6.499H4.99c.057-.826.025-1.656-.093-2.475A8 8 0 0 0 3.579 9.19C2.342 7.549.404 7.303.502 7m8.483 8.5L13 15.499c-.143-1.147-.493-2.3-.528-3.455c-.05-1.719-.205-4.044 1.621-4.081c.907.08 1.294.836 1.4 1.037c-.04-.399-.33-1.94-1.493-2.415c-1.393-.57-3.333 1.648-3.517 1.967M2 2c.14.214 1.216-.506 2.263-.267C5.367 1.986 6.553 3.656 7 9m3.483-.448A10.26 10.26 0 0 0 8.679 3.66C8.127 2.886 6.215.19 4.1.53C2.74.75 2.123 1.542 2 2"></svg:path><svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M8 11a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5m3 0a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path>`,
})
export class CatppuccinTwigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTwineIcon],svg[catppuccin-twine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8aadf4" d="M2.5 14.5v-12h4v2.29"></svg:path><svg:path stroke="#a6da95" d="M6.5 13A5.5 5.5 0 0 1 12 7.5h1.5v-4H11A8.5 8.5 0 0 0 2.5 12v2.5h4z"></svg:path></svg:g>`,
})
export class CatppuccinTwineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTypescriptIcon],svg[catppuccin-typescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 1.5h8A2.5 2.5 0 0 1 14.5 4v8a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 12V4A2.5 2.5 0 0 1 4 1.5"></svg:path><svg:path d="M12.5 8.75c0-.69-.54-1.25-1.2-1.25h-.6c-.66 0-1.2.56-1.2 1.25S10.04 10 10.7 10h.6c.66 0 1.2.56 1.2 1.25s-.54 1.25-1.2 1.25h-.6c-.66 0-1.2-.56-1.2-1.25m-3-3.75v5M5 7.5h3"></svg:path></svg:g>`,
})
export class CatppuccinTypescriptIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTypescriptConfigIcon],svg[catppuccin-typescript-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8087a2" d="M11.5 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1.75-4l1.75 3l-1.75 3h-3.5L8 12.5l1.75-3z"></svg:path><svg:path stroke="#8aadf4" d="M6.5 11.5h-4a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2h7.97c1.1 0 2 .92 2 2V7"></svg:path><svg:path stroke="#8aadf4" d="M10.5 4.5C10.17 4.17 9.67 4 9 4c-1 0-1.5.5-1.5 1S8 6 9 6s1.5.5 1.5 1S10 8 9 8c-.67 0-1.17-.17-1.5-.5M4 4v4M2.5 4h3"></svg:path></svg:g>`,
})
export class CatppuccinTypescriptConfigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTypescriptDefIcon],svg[catppuccin-typescript-def-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8aadf4" d="M12.5 4.5h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V10"></svg:path><svg:path stroke="#8aadf4" d="M13.5 9c-.33-.33-.83-.5-1.5-.5c-1 0-1.5.5-1.5 1s.5 1 1.5 1s1.5.5 1.5 1s-.5 1-1.5 1c-.67 0-1.17-.17-1.5-.5M8 8.5v4m-1.5-4h3"></svg:path><svg:path stroke="#7dc4e4" d="M2.04 7.88L.5 3.02c-.05-.15.06-.31.23-.37L7.54.52c.1-.04.21-.02.3.04l2.63 1.84c.1.07.13.19.1.3L9.44 5.72a.34.34 0 0 1-.22.2l-6.8 2.13a.31.31 0 0 1-.4-.17Zm5.13-3.23a1.21 1.21 0 1 0 .62-2.35a1.21 1.21 0 0 0-.62 2.35"></svg:path></svg:g>`,
})
export class CatppuccinTypescriptDefIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTypescriptReactIcon],svg[catppuccin-typescript-react-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 11.3c4.14 0 7.5-1.28 7.5-2.86S12.14 5.58 8 5.58S.5 6.86.5 8.44s3.36 2.87 7.5 2.87Z"></svg:path><svg:path d="M5.52 9.87c2.07 3.6 4.86 5.86 6.23 5.07c1.37-.8.8-4.34-1.27-7.93S5.62 1.16 4.25 1.95s-.8 4.34 1.27 7.92"></svg:path><svg:path d="M5.52 7.01c-2.07 3.59-2.64 7.14-1.27 7.93s4.16-1.48 6.23-5.07c2.07-3.58 2.64-7.13 1.27-7.92c-1.37-.8-4.16 1.47-6.23 5.06"></svg:path><svg:path d="M8.5 8.44a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path></svg:g>`,
})
export class CatppuccinTypescriptReactIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTypescriptTestIcon],svg[catppuccin-typescript-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M15.5 12c-.33-.33-.83-.5-1.5-.5c-1 0-1.5.5-1.5 1s.5 1 1.5 1s1.5.5 1.5 1s-.5 1-1.5 1c-.67 0-1.17-.17-1.5-.5m-3-3.5v4m-1.5-4h3m-.28-9.75l-8.49 8.48a2.5 2.5 0 1 0 3.54 3.54l.77-.77m3.59-3.59l.59-.59l1.17-1.18l2.36-2.36M9.5.5l6 6m-3.5 1H4.98"></svg:path>`,
})
export class CatppuccinTypescriptTestIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinTypstIcon],svg[catppuccin-typst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8bd5ca" stroke-linecap="round" stroke-linejoin="round" d="M8.343 11.167q0 .904.252 1.214t.915.31q.687 0 1.763-.715l.457.786Q9.716 14.5 8.412 14.5t-2.06-.643q-.754-.666-.754-2.333V5.286H4.453l-.183-.881l1.328-.429V2.81L8.343 1.5v2.619l2.7-.214l-.251 1.548l-2.449-.096z"></svg:path>`,
})
export class CatppuccinTypstIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinUnityIcon],svg[catppuccin-unity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="m9.5 1l5 3v5.5m-1 3l-5.5 3l-5.5-3m-1-3V3.83L6.5 1m-5 3L8 8v7.5M14.5 4L8 8"></svg:path>`,
})
export class CatppuccinUnityIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinUnocssIcon],svg[catppuccin-unocss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8087a2" d="M9 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path><svg:path stroke="#cad3f5" d="M7 12c0 1.75-1.25 3-3 3s-3-1.25-3-3V9h6zm2-8c0-1.75 1.25-3 3-3s3 1.25 3 3v3H9Z"></svg:path></svg:g>`,
})
export class CatppuccinUnocssIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinUrlIcon],svg[catppuccin-url-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="m5.5 10.5l5-5M3.73 6.61L2.67 7.67a4 4 0 1 0 5.66 5.66l1.06-1.06m2.88-2.88l1.06-1.06a4 4 0 1 0-5.66-5.66L6.61 3.73"></svg:path>`,
})
export class CatppuccinUrlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinUvIcon],svg[catppuccin-uv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5bde6" stroke-linejoin="round" d="M1 1h5.8v9.1h2.8V1H15v14h-2v-1.4h-1.5c-.2.8-.9 1.4-1.8 1.4H3.2C1.9 15 1 14 1 12.9z"></svg:path>`,
})
export class CatppuccinUvIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVIcon],svg[catppuccin-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m1.5 1.5l4 .5L10 14.5H6z"></svg:path><svg:path d="M8 8.95L10.5 2l4-.5l-4.5 13"></svg:path></svg:g>`,
})
export class CatppuccinVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVanillaExtractIcon],svg[catppuccin-vanilla-extract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5bde6" stroke-linecap="round" stroke-linejoin="round" d="M5.378 6.164A2.536 2.587 0 0 0 3.54 8.65m1.838-2.486c1.255-.366 3.914-.6 4.423-2.06m-4.423 2.06C5.378 3.45 8 4.1 8 1.5c1.304 0 2.232 1.371 1.801 2.605m0 0c1.037-.091 1.732 1.125 1.184 1.996m0 0c-.174.277-.461.503-.755.676m.755-.676c1.247.296 1.475 1.44 1.475 2.549"></svg:path><svg:path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="M10.549 9.917c0-1.69 2.548-1.69 2.548 0c0 .885-.48 1.643-.855 2.411c-.513 1.057-.77 1.585-1.233 1.879c-.462.293-1.036.293-2.186.293H7.177c-1.15 0-1.724 0-2.186-.293c-.462-.294-.72-.822-1.233-1.879c-.374-.768-.855-1.526-.855-2.411c0-1.69 2.548-1.69 2.548 0c0-1.69 2.549-1.69 2.549 0c0-1.69 2.549-1.69 2.549 0"></svg:path>`,
})
export class CatppuccinVanillaExtractIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVentoIcon],svg[catppuccin-vento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="M1.5 1.5h4.469l5.687 13H7.594Z"></svg:path><svg:path fill="none" stroke="#f5bde6" stroke-linecap="round" stroke-linejoin="round" d="M10.031 1.5H14.5l-2.844 13H7.594Z"></svg:path><svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="m8.812 8l2.844 6.5H7.594Z"></svg:path>`,
})
export class CatppuccinVentoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVercelIcon],svg[catppuccin-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M1.5 13.5h13L8 2z"></svg:path>`,
})
export class CatppuccinVercelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVercelIgnoreIcon],svg[catppuccin-vercel-ignore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="M1.5 13.5h13L8 2z"></svg:path>`,
})
export class CatppuccinVercelIgnoreIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVerilogIcon],svg[catppuccin-verilog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 2.5h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7c0-1.1.9-2 2-2"></svg:path><svg:path d="M5.5 5.5h5v5h-5zm8.5 0h1.5M14 8h1.5M14 10.5h1.5M.5 5H2M.5 7.5H2M.5 10H2m3.5-8V.5M8 2V.5M10.5 2V.5m-5 15V14M8 15.5V14m2.5 1.5V14"></svg:path></svg:g>`,
})
export class CatppuccinVerilogIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVhsIcon],svg[catppuccin-vhs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M2 3.5c-.828 0-1.5.743-1.5 1.556v5.888c0 .813.672 1.556 1.5 1.556h12c.828 0 1.5-.743 1.5-1.556V5.056c0-.813-.672-1.556-1.5-1.556Zm.405 3H4v3H2.405A3 3 0 0 1 2 8c0-.515.142-1.051.405-1.5M6 6.5h4v3H6Zm6 0h1.595c.262.449.405.985.405 1.5s-.143 1.051-.405 1.5H12Z"></svg:path>`,
})
export class CatppuccinVhsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVideoIcon],svg[catppuccin-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#7dc4e4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 2.5h10c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H3A1.5 1.5 0 0 1 1.5 13V4c0-.83.67-1.5 1.5-1.5m-1.5 3h13"></svg:path><svg:path d="m3.5 5.5l2-3m1.5 3l2-3m1.5 3l2-3M6.5 8v4l4-2z"></svg:path></svg:g>`,
})
export class CatppuccinVideoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVimIcon],svg[catppuccin-vim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5h4m-3 0v11h3l8-11H11l-6.5 9v-9m10 0H9"></svg:path>`,
})
export class CatppuccinVimIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVisualStudioIcon],svg[catppuccin-visual-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M10.5 11L3 4.5h-.5l-1 1V6l9 8.5l4-2v-9l-4-2v13m0-13L5.3 6.41M3.53 8.08L1.5 10v.5l.98 1.1l.52-.1l2.17-1.88m1.91-1.66L10.5 5"></svg:path>`,
})
export class CatppuccinVisualStudioIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVitalIcon],svg[catppuccin-vital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M8 15S5 6.5 1 4c1 .2 3.3.5 4.5.5c1 .5 2.5 3 2.5 4c0-1 1.5-3.5 2.5-4A31 31 0 0 0 15 4c-4 2.5-7 11-7 11"></svg:path><svg:path stroke="#c6a0f6" d="M3.4 2.6S5 1 7.7 1S12 2.6 12 2.6m-10.9 4S.5 8.7 2 11a6 6 0 0 0 3.4 3m4.6 0s2.2-.6 3.5-3c1.4-2.2.8-4.5.8-4.5"></svg:path></svg:g>`,
})
export class CatppuccinVitalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinViteIcon],svg[catppuccin-vite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#c6a0f6" d="m11 5.5l3.5-1l-6.5 11l-6.5-11l3.5 1"></svg:path><svg:path stroke="#eed49f" d="m6 1.5l-.5 5l2-1l-1 3L8 8v3l4-7.5l-2 .5L11.5.5Z"></svg:path></svg:g>`,
})
export class CatppuccinViteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVitestIcon],svg[catppuccin-vitest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#a6da95" d="m14.5 8.5l-6.5 6l-6.5-6"></svg:path><svg:path stroke="#eed49f" d="M7.5 11.5L8 8L5 7l4.5-5.5L9 5l3 1z"></svg:path></svg:g>`,
})
export class CatppuccinVitestIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVsCodiumIcon],svg[catppuccin-vs-codium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.63 7.61c-.08 2.45.7 3.91 2.37 4.39a5.53 5.53 0 0 1 3.5 2.5"></svg:path><svg:path d="M3.5 3.5c1.19.76 1.78 1.53 1.78 2.32S4.2 8.52 4.56 10c.45 1.82 2.94 2 2.94 4.5"></svg:path><svg:path d="M7.5 7.5c-.47.08-.96.24-1.47.5c-.76.39-1.47 1.54-1.47 2"></svg:path><svg:path d="M7.5 1.5c1.4 2.02 2.1 3.86 2.1 5.53c0 1.17-.29 2.3-.88 3.27c-.57.93-1.22 1.16-1.22 4.2m5-12c-1 0-1.51.5-2.01 1c-.34.33-.67 1-.99 2m4 1c.23 1.46-.1 2.63-1 3.5c-.9.88-1.63.45-3 1.5c-.48.37-1.15 1.37-2 3m4.5-4h2.5"></svg:path></svg:g>`,
})
export class CatppuccinVsCodiumIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVscodeIcon],svg[catppuccin-vscode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M10.5 11L3 4.5h-.5l-1 1V6l9 8.5l4-2v-9l-4-2v13m0-13L5.3 6.41M3.53 8.08L1.5 10v.5l.98 1.1l.52-.1l2.17-1.88m1.91-1.66L10.5 5"></svg:path>`,
})
export class CatppuccinVscodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVscodeIgnoreIcon],svg[catppuccin-vscode-ignore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="M10.5 11L3 4.5h-.5l-1 1V6l9 8.5l4-2v-9l-4-2v13m0-13L5.3 6.41M3.53 8.08L1.5 10v.5l.98 1.1l.52-.1l2.17-1.88m1.91-1.66L10.5 5"></svg:path>`,
})
export class CatppuccinVscodeIgnoreIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVueIcon],svg[catppuccin-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1 1.5h5.44L8 4.56L9.56 1.5H15l-6.99 13z"></svg:path><svg:path d="M12.05 1.73L8 9.28L3.95 1.73"></svg:path></svg:g>`,
})
export class CatppuccinVueIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinVueConfigIcon],svg[catppuccin-vue-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8087a2" d="M11.5 13.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1.75-4l1.75 3l-1.75 3h-3.5L8 12.5l1.75-3z"></svg:path><svg:path stroke="#a6da95" d="M.5.5h4.67L6.5 3.09L7.83.5h4.67l-6 11zm9.47.2L6.5 7.08L3.03.7"></svg:path></svg:g>`,
})
export class CatppuccinVueConfigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinWebAssemblyIcon],svg[catppuccin-web-assembly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9.5 12.5l1.5-4l1.5 4m-2.5-1h2m-8.5-3l1 4l1.5-4l1.5 4l1-4"></svg:path><svg:path d="M10.5 1.5h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2v0"></svg:path><svg:path d="M5.5 1.5c0 1.38.5 3 2.5 3s2.5-1.62 2.5-3"></svg:path></svg:g>`,
})
export class CatppuccinWebAssemblyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinWebpackIcon],svg[catppuccin-webpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#91d7e3" d="m4.5 10.02l-3 1.73M11.47 10l3.03 1.75M8 4V.5"></svg:path><svg:path stroke="#8aadf4" d="M11.5 10L8 12l-3.5-2V6L8 4l3.5 2z"></svg:path><svg:path stroke="#91d7e3" d="M14.5 11.75L8 15.5l-6.5-3.75v-7.5L8 .5l6.5 3.75zm-13-7.5L8 8m6.5-3.75L8 8m0 0v7.5"></svg:path></svg:g>`,
})
export class CatppuccinWebpackIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinWindiIcon],svg[catppuccin-windi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="M1.5 5.5H6a2 2 0 1 0-2-2m-2.5 5H12A2.5 2.5 0 1 0 9.5 6m-2 7A1.5 1.5 0 1 0 9 11.5H5.5m-4 0h2"></svg:path>`,
})
export class CatppuccinWindiIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinWorkflowIcon],svg[catppuccin-workflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M3.5 1.5h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2m7 7h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2m-6-1V10q0 1.5 1.5 1.5h2.5"></svg:path>`,
})
export class CatppuccinWorkflowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinWxtIcon],svg[catppuccin-wxt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M1.5 5.45c0-1 .81-1.81 1.81-1.81h1.81v-.33a1.81 1.81 0 0 1 3.62 0v.33h1.81c1 0 1.81.81 1.81 1.81v1.81h.33a1.81 1.81 0 1 1 0 3.62h-.33v1.81c0 1-.81 1.81-1.81 1.81H8.74v-.33a1.81 1.81 0 1 0-3.62 0v.33H1.5v-3.62h.33a1.81 1.81 0 0 0 0-3.62H1.5Z"></svg:path>`,
})
export class CatppuccinWxtIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinXamlIcon],svg[catppuccin-xaml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8aadf4" d="m10.25 4.5l2.25 4l-2.25 4h-4.5l-2.25-4l2.25-4z"></svg:path><svg:path stroke="#cad3f5" d="m2.5 12.5l-2-4l2-4"></svg:path><svg:path stroke="#8aadf4" d="m6 12l2-3.5h4m-4 0L6 5"></svg:path><svg:path stroke="#cad3f5" d="m13.5 4.5l2 4l-2 4"></svg:path></svg:g>`,
})
export class CatppuccinXamlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinXcodeIcon],svg[catppuccin-xcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M13.5 8v3.714a2.78 2.78 0 0 1-2.786 2.786H8.5m-4.5 0h-.714A2.78 2.78 0 0 1 .5 11.714V4.286A2.78 2.78 0 0 1 3.286 1.5H6M3.5 12L8 4M6 4l1.477 2.625m2.742 4.875l.281.5M3 9.5h2.977"></svg:path><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.884"><svg:path stroke="#cad3f5" d="M14 12L.34 25.703c-1.443 1.447-3.267-.728-1.996-2.003L12 10" transform="matrix(.50714 -.15926 .15877 .5054 2.596 1.629)"></svg:path><svg:path stroke="#8087a2" d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5m-.408.569l3.854-4.031" transform="matrix(.50714 -.15926 .15877 .5054 2.596 1.629)"></svg:path></svg:g>`,
})
export class CatppuccinXcodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinXmakeIcon],svg[catppuccin-xmake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#7dc4e4" d="M14.04 10.42a6.45 6.45 0 0 0-.56-5.92a6.5 6.5 0 0 0-.73-.94L8.99 6.18z"></svg:path><svg:path stroke="#8bd5ca" d="M7.35 7.32L2.2 10.94A6.5 6.5 0 0 0 13 12.15z"></svg:path><svg:path stroke="#a6da95" d="M3.04 3.8a6.47 6.47 0 0 0-1.47 5.14L5.72 6z"></svg:path></svg:g>`,
})
export class CatppuccinXmakeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinXmlIcon],svg[catppuccin-xml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5L1 8l3.5 3.5m7-7L15 8l-3.5 3.5M9.5 2l-3 12"></svg:path>`,
})
export class CatppuccinXmlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinYamlIcon],svg[catppuccin-yaml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round" d="M2.5 1.5h3l3 4l3-4h3l-9 13h-3L7 8z"></svg:path>`,
})
export class CatppuccinYamlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinYarnIcon],svg[catppuccin-yarn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="6.22"><svg:path d="M11.9 65.033s-1.241-16.91 11.549-24.936c0 0-8.286-12.228 0-19.036s12.645-9.145 18.736-8.634c0 0 7.247-20.251 14.643 0c0 0 9.061-7.776 7.844 17.247c-.323 6.646-4.717 16.289-7.844 20.326c0 0 8.881 6.323 8.881 25.924c0 0 14.526-7.698 18.663-8.162c4.136-.463 7.724-.011 8.572 2.799s1.245 4.744-1.062 6.558c-2.308 1.813-10.589 4.258-19.484 10.194c-8.894 5.936-11.77 4.105-14.208 5.576c-2.438 1.472-16.058 7.342-33.033.927c0 0-15.323 4.247-14.195-6.503c0 0-10.684-12.422.938-22.28" transform="matrix(.1608 0 0 .16076 -.053 -.054)"></svg:path><svg:path d="M27.469 94.285c-1.525-1.407.321-8.703.321-8.703s-1.252 4.723-3.116 7.525" transform="matrix(.1608 0 0 .16076 -.053 -.054)"></svg:path></svg:g>`,
})
export class CatppuccinYarnIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinYarnLockIcon],svg[catppuccin-yarn-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"></svg:path><svg:g fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" stroke-width="7.179"><svg:path d="M58.19 92.889c-2.438 1.472-16.058 7.342-33.033.927c0 0-15.323 4.247-14.195-6.503c0 0-10.684-12.422.938-22.28c0 0-1.241-16.91 11.549-24.936c0 0-8.286-12.228 0-19.036s12.645-9.145 18.736-8.634c0 0 7.247-20.251 14.643 0c0 0 9.061-7.776 7.844 17.247c-.323 6.646-4.717 16.289-7.844 20.326c0 0 2.22 1.58 4.44 5.612c1.11 2.015 2.22 4.643 3.053 7.992a45 45 0 0 1 1.006 5.578" transform="matrix(.13927 0 0 .13933 -.413 .02)"></svg:path><svg:path d="M27.469 94.285c-1.525-1.407.321-8.703.321-8.703s-1.252 4.723-3.116 7.525" transform="matrix(.13927 0 0 .13933 -.413 .02)"></svg:path></svg:g>`,
})
export class CatppuccinYarnLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinZapIcon],svg[catppuccin-zap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M2.85 9.301a.644.65 0 0 1-.502-1.06L8.72 1.605a.322.325 0 0 1 .554.3L8.039 5.82a.644.65 0 0 0 .605.878h4.506a.644.65 0 0 1 .502 1.06L7.28 14.395a.322.325 0 0 1-.554-.3l1.236-3.916a.644.65 0 0 0-.605-.878Z"></svg:path>`,
})
export class CatppuccinZapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinZigIcon],svg[catppuccin-zig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M10 3.5H6l-1.5 2h4l-7 9l4.5-2h4l1.5-2h-4l7-9z"></svg:path>`,
})
export class CatppuccinZigIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinZipIcon],svg[catppuccin-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linejoin="round" d="M5.5 10v1m1-2v1m-1-2v1m1-2v1m-1-2v1m1-2v1m-1-2v1m0-3v1m1 0v1m7 2.5v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h4.01m-.01 0l5 5h-4a1 1 0 0 1-1-1z"></svg:path>`,
})
export class CatppuccinZipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinApacheIcon],svg[catppuccin-apache-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#ed8796" d="M2.5 14.5a24.3 24.3 0 0 1 1.63-4.36c.21-.42.45-.84.7-1.26c2.75-4.61 6.63-6.8 8.67-7.38c-.8 3.52-3.91 10.46-10.15 10.4"></svg:path><svg:path stroke="#f5a97f" d="M6.14 6.96C8.7 3.64 11.76 1.99 13.5 1.5a18.5 18.5 0 0 1-2.27 5.46"></svg:path><svg:path stroke="#ed8796" d="M6.5 9.5h-2m1.25-2h2.71"></svg:path></svg:g>`,
})
export class CatppuccinApacheIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinAngularServiceIcon],svg[catppuccin-angular-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#eed49f" d="m8 1l6.5 2l-1 9.5L8 15l-5.5-2.5l-1-9.5z"></svg:path><svg:path stroke="#cad3f5" d="m4.5 10.5l3.5-7l3.5 7m-5.796-2h4.635"></svg:path></svg:g>`,
})
export class CatppuccinAngularServiceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinAnsibleLintIcon],svg[catppuccin-ansible-lint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M3.75 10.25L7 2.75l3.25 7.5L5.5 6.5m7.868 1.81A6.5 6.5 0 1 0 7 13.5"></svg:path><svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="m8 11.9l2.5 3.6l4.5-6"></svg:path>`,
})
export class CatppuccinAnsibleLintIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[catppuccinApiBlueprintIcon],svg[catppuccin-api-blueprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M5.5 12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4.5-9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-6.5 7l3-5.5m3 0l3 5.5"></svg:path>`,
})
export class CatppuccinApiBlueprintIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
