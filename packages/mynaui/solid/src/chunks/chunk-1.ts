import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHashDiamondSolidIcon],svg[mynaui-hash-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.769 13h1.976l.359-2h-1.976z"></svg:path><svg:path d="M12 1.25a3.16 3.16 0 0 0-2.235.926L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588A3.16 3.16 0 0 0 12 1.25m-.963 6.012a.75.75 0 0 1 .606.87L11.397 9.5h1.976l.293-1.633a.75.75 0 0 1 1.477.266L14.897 9.5h1.385a.75.75 0 0 1 0 1.5h-1.654l-.36 2h2.014a.75.75 0 0 1 0 1.5H14l-.293 1.633a.75.75 0 0 1-1.477-.265l.246-1.368H10.5l-.293 1.633a.75.75 0 0 1-1.477-.265l.246-1.368H7.718a.75.75 0 0 1 0-1.5h1.527l.359-2H7.718a.75.75 0 0 1 0-1.5h2.155l.293-1.633a.75.75 0 0 1 .871-.605"></svg:path></svg:g>`,
})
export class MynauiHashDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHashHexagonSolidIcon],svg[mynaui-hash-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.769 13h1.976l.359-2h-1.976z"></svg:path><svg:path d="M12 1.75a2.63 2.63 0 0 0-1.32.355l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002A2.63 2.63 0 0 0 12 1.75m-.963 5.512a.75.75 0 0 1 .606.87L11.397 9.5h1.976l.293-1.633a.75.75 0 0 1 1.477.266L14.897 9.5h1.385a.75.75 0 0 1 0 1.5h-1.654l-.36 2h2.014a.75.75 0 0 1 0 1.5H14l-.293 1.633a.75.75 0 0 1-1.477-.265l.246-1.368H10.5l-.293 1.633a.75.75 0 0 1-1.477-.265l.246-1.368H7.718a.75.75 0 0 1 0-1.5h1.527l.359-2H7.718a.75.75 0 0 1 0-1.5h2.155l.293-1.633a.75.75 0 0 1 .871-.605"></svg:path></svg:g>`,
})
export class MynauiHashHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHashOctagonSolidIcon],svg[mynaui-hash-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.769 13h1.976l.359-2h-1.976z"></svg:path><svg:path d="M8.937 2.25a2.3 2.3 0 0 0-.9.158c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158zm2.1 5.012a.75.75 0 0 1 .606.87L11.397 9.5h1.976l.293-1.633a.75.75 0 0 1 1.477.266L14.897 9.5h1.385a.75.75 0 0 1 0 1.5h-1.654l-.36 2h2.014a.75.75 0 0 1 0 1.5H14l-.293 1.633a.75.75 0 0 1-1.477-.265l.246-1.368H10.5l-.293 1.633a.75.75 0 0 1-1.477-.265l.246-1.368H7.718a.75.75 0 0 1 0-1.5h1.527l.359-2H7.718a.75.75 0 0 1 0-1.5h2.155l.293-1.633a.75.75 0 0 1 .871-.605"></svg:path></svg:g>`,
})
export class MynauiHashOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHashSolidIcon],svg[mynaui-hash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.436 4.131a.75.75 0 0 0-1.477-.262l-.74 4.162H3a.75.75 0 0 0 0 1.5h4.953L6.9 15.47H3a.75.75 0 1 0 0 1.5h3.632l-.692 3.9a.75.75 0 0 0 1.477.262l.739-4.162h5.833l-.692 3.9a.75.75 0 1 0 1.476.262l.74-4.162H21a.75.75 0 0 0 0-1.5h-5.221l1.054-5.938H21a.75.75 0 0 0 0-1.5h-3.9l.692-3.9a.75.75 0 0 0-1.477-.262l-.739 4.162H9.743z"></svg:path>`,
})
export class MynauiHashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHashSquareSolidIcon],svg[mynaui-hash-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.769 13h1.976l.359-2h-1.976z"></svg:path><svg:path d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm1.67 5.012a.75.75 0 0 1 .606.87L11.397 9.5h1.976l.293-1.633a.75.75 0 0 1 1.477.266L14.897 9.5h1.385a.75.75 0 0 1 0 1.5h-1.654l-.36 2h2.014a.75.75 0 0 1 0 1.5H14l-.293 1.633a.75.75 0 0 1-1.477-.265l.246-1.368H10.5l-.293 1.633a.75.75 0 0 1-1.477-.265l.246-1.368H7.718a.75.75 0 0 1 0-1.5h1.527l.359-2H7.718a.75.75 0 0 1 0-1.5h2.155l.293-1.633a.75.75 0 0 1 .871-.605"></svg:path></svg:g>`,
})
export class MynauiHashSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHashWavesSolidIcon],svg[mynaui-hash-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.769 13h1.976l.359-2h-1.976z"></svg:path><svg:path d="M13.435 2.075a3.33 3.33 0 0 0-2.87 0c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.078.066c.506.431.867.74 1.261.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928m-2.398 5.187a.75.75 0 0 1 .606.87L11.397 9.5h1.976l.293-1.633a.75.75 0 0 1 1.477.266L14.897 9.5h1.385a.75.75 0 0 1 0 1.5h-1.654l-.36 2h2.014a.75.75 0 0 1 0 1.5H14l-.293 1.633a.75.75 0 0 1-1.477-.265l.246-1.368H10.5l-.293 1.633a.75.75 0 0 1-1.477-.265l.246-1.368H7.718a.75.75 0 0 1 0-1.5h1.527l.359-2H7.718a.75.75 0 0 1 0-1.5h2.155l.293-1.633a.75.75 0 0 1 .871-.605"></svg:path></svg:g>`,
})
export class MynauiHashWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadingFiveSolidIcon],svg[mynaui-heading-five-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.75a.75.75 0 0 1 .75.75v6.75h8V4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0v-6.75h-8v6.75a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75m17.466 5.526a.75.75 0 0 1-.492.94c-1.137.355-2.375.347-3.29.265q-.377-.034-.684-.08v1.915h2.028c1.689 0 2.972 1.448 2.972 3.127v1.399c0 1.07-.386 1.936-1.016 2.532a3.26 3.26 0 0 1-2.23.876a3.23 3.23 0 0 1-2.238-.863c-.632-.597-1.016-1.467-1.016-2.545a.75.75 0 0 1 1.5 0c0 .705.241 1.167.546 1.454c.315.297.749.456 1.2.454a1.77 1.77 0 0 0 1.207-.465c.308-.291.547-.752.547-1.443v-1.4c0-.946-.706-1.626-1.472-1.626H16a.75.75 0 0 1-.75-.75V9.5a.75.75 0 0 1 .931-.728m0 0h.003l.016.005l.072.016q.099.023.286.057c.247.046.599.1 1.009.137c.834.075 1.846.067 2.71-.203a.75.75 0 0 1 .939.492"></svg:path>`,
})
export class MynauiHeadingFiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadingFourSolidIcon],svg[mynaui-heading-four-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.75a.75.75 0 0 1 .75.75v6.75h8V4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0v-6.75h-8v6.75a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75m16.066 5.913a.75.75 0 0 0-1.465-.326c-.173.78-.423 1.534-.71 2.238l-2.477 4.332a.75.75 0 0 0 .586 1.218h3V19.5a.75.75 0 0 0 1.5 0v-2.375h.5a.75.75 0 0 0 0-1.5h-.5V14.5a.75.75 0 0 0-1.5 0v1.125h-1.554c.172-.265.36-.568.556-.903c.75-1.287 1.624-3.08 2.064-5.06"></svg:path>`,
})
export class MynauiHeadingFourSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadingOneSolidIcon],svg[mynaui-heading-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.75a.75.75 0 0 1 .75.75v6.75h8V4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0v-6.75h-8v6.75a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75m16.077 5.075a.75.75 0 0 1 .423.675v10a.75.75 0 0 1-1.5 0v-8.45l-1.785 1.413a.75.75 0 1 1-.93-1.176l3-2.375a.75.75 0 0 1 .792-.087"></svg:path>`,
})
export class MynauiHeadingOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadingSixSolidIcon],svg[mynaui-heading-six-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.75a.75.75 0 0 1 .75.75v6.75h8V4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0v-6.75h-8v6.75a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75m11.5 9.5c0-2.32 1.531-4.5 3.75-4.5h1a.75.75 0 0 1 0 1.5h-1c-1.095 0-2.25 1.178-2.25 3v.298c.53-.296 1.14-.423 1.75-.423c.824 0 1.646.231 2.27.797c.639.576.98 1.42.98 2.453c0 1.975-1.308 3.875-3.25 3.875s-3.25-1.9-3.25-3.875zm1.5 3.125c0 1.477.931 2.375 1.75 2.375s1.75-.898 1.75-2.375c0-.692-.218-1.1-.485-1.341c-.28-.253-.708-.409-1.265-.409s-.985.156-1.265.409c-.267.242-.485.649-.485 1.341"></svg:path>`,
})
export class MynauiHeadingSixSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadingSolidIcon],svg[mynaui-heading-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 3.75A.75.75 0 0 1 8 4.5v6.75h8V4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0v-6.75H8v6.75a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiHeadingSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadingThreeSolidIcon],svg[mynaui-heading-three-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.75a.75.75 0 0 1 .75.75v6.75h8V4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0v-6.75h-8v6.75a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75m11.5 5.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .592 1.21l-2.687 3.461c.58.145 1.114.391 1.564.752c.818.655 1.281 1.63 1.281 2.838c0 .85-.268 1.57-.738 2.12c-.465.541-1.091.874-1.749 1.024c-1.294.294-2.827-.095-3.818-1.187a.75.75 0 1 1 1.11-1.009c.6.661 1.568.917 2.375.733c.394-.09.719-.277.943-.538c.219-.255.377-.621.377-1.143c0-.794-.287-1.322-.719-1.668c-.454-.364-1.146-.586-2.031-.586a.75.75 0 0 1-.592-1.21l2.56-3.297H16a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiHeadingThreeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadingTwoSolidIcon],svg[mynaui-heading-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3.75a.75.75 0 0 1 .75.75v6.75h8V4.5a.75.75 0 0 1 1.5 0v15a.75.75 0 0 1-1.5 0v-6.75h-8v6.75a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75m13.523 6.926c-.3.26-.523.66-.523 1.263a.75.75 0 0 1-1.5 0c0-1.023.401-1.842 1.04-2.396c.623-.54 1.43-.793 2.21-.793s1.587.253 2.21.793c.639.554 1.04 1.373 1.04 2.396c0 .942-.41 1.769-.925 2.476c-.513.704-1.184 1.363-1.803 1.963l-.096.093c-.601.583-1.145 1.11-1.552 1.634a4 4 0 0 0-.42.645H21a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75c0-.885.432-1.661.939-2.315c.475-.612 1.091-1.209 1.668-1.767l.121-.117c.631-.613 1.21-1.185 1.634-1.769c.423-.581.638-1.098.638-1.593c0-.603-.224-1.003-.523-1.263c-.314-.272-.757-.426-1.227-.426s-.913.154-1.227.426"></svg:path>`,
})
export class MynauiHeadingTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadphonesSolidIcon],svg[mynaui-headphones-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25A9.75 9.75 0 0 0 2.25 12v5q0 .04.004.08v.05c-.003 1.278.602 2.682 1.963 3.25l.071.03c.11.044.22.12.362.25c.07.064.138.132.22.213l.008.008c.08.08.175.175.277.265c.204.183.474.388.83.506c.37.122.77.131 1.208.022c.723-.18 1.266-.752 1.469-1.454c.089-.309.089-.668.088-1.084v-4.094c0-.285 0-.528-.01-.728a2.3 2.3 0 0 0-.107-.627c-.23-.683-.786-1.223-1.504-1.377a2.25 2.25 0 0 0-1.264.065c-.37.133-.652.354-.87.558c-.12.11-.269.267-.391.396l-.164.17a1.8 1.8 0 0 1-.427.338q-.136.07-.263.152V12a8.25 8.25 0 1 1 16.5 0v1.864a3 3 0 0 0-.538-.274a1.2 1.2 0 0 1-.362-.25c-.07-.064-.138-.132-.22-.213l-.008-.008a7 7 0 0 0-.277-.265a2.4 2.4 0 0 0-.83-.506q-.553-.184-1.208-.022c-.723.18-1.266.752-1.469 1.454c-.089.309-.088.668-.088 1.085v4.093c0 .285 0 .528.01.728c.012.208.037.418.107.627c.23.683.786 1.223 1.504 1.377c.463.1.883.073 1.264-.065c.37-.133.652-.354.87-.558c.12-.11.269-.267.391-.395c.065-.069.123-.13.164-.17a1.8 1.8 0 0 1 .427-.34c1.11-.573 1.755-1.724 1.758-2.936v-.143L21.75 17v-5A9.75 9.75 0 0 0 12 2.25"></svg:path>`,
})
export class MynauiHeadphonesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartBrokenSolidIcon],svg[mynaui-heart-broken-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.867C10.998 3.583 9.474 2.75 7.75 2.75c-3.08 0-5.5 2.639-5.5 5.797c0 1.588.637 3.171 1.516 4.612c.884 1.448 2.051 2.813 3.199 3.982a38.5 38.5 0 0 0 4.6 3.97l.002.001a.75.75 0 0 0 .867 0l.008-.006l.021-.015l.08-.058q.104-.075.295-.219a38.5 38.5 0 0 0 4.197-3.674c1.148-1.168 2.315-2.533 3.199-3.981c.88-1.44 1.516-3.024 1.516-4.612c0-1.885-.585-3.358-1.62-4.358c-1.03-.994-2.42-1.439-3.88-1.439c-.513 0-1.007.074-1.476.21l-1.947 3.362l-.006.013L11.239 9.5l3.093.774a.75.75 0 0 1 .442 1.143l-2 3a.75.75 0 1 1-1.248-.832l1.41-2.114l-2.968-.742a.75.75 0 0 1-.489-1.063L11.161 6.3z"></svg:path>`,
})
export class MynauiHeartBrokenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartCheckSolidIcon],svg[mynaui-heart-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.434 21.112l.008-.006l.021-.015l.08-.058q.104-.075.295-.219a38.5 38.5 0 0 0 4.197-3.674c1.148-1.168 2.315-2.533 3.199-3.981c.88-1.44 1.516-3.024 1.516-4.612c0-1.885-.585-3.358-1.62-4.358c-1.03-.994-2.42-1.439-3.88-1.439c-1.725 0-3.248.833-4.25 2.117C10.998 3.583 9.474 2.75 7.75 2.75c-3.08 0-5.5 2.639-5.5 5.797c0 1.588.637 3.171 1.516 4.612c.884 1.448 2.051 2.813 3.199 3.982a38.5 38.5 0 0 0 4.492 3.892l.08.058l.021.015l.008.006a.75.75 0 0 0 .867 0m1.757-10.969a.75.75 0 0 1 .166 1.047l-2.11 2.908a.976.976 0 0 1-1.521.07l-1.04-1.18a.75.75 0 0 1 1.127-.991l.606.689l1.724-2.376a.75.75 0 0 1 1.047-.167"></svg:path>`,
})
export class MynauiHeartCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartCircleSolidIcon],svg[mynaui-heart-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.051 4.124l.005-.003l.009-.006l.032-.022l.117-.081a15 15 0 0 0 1.628-1.341c.444-.427.91-.938 1.27-1.492c.354-.545.648-1.2.648-1.898c0-.782-.262-1.443-.767-1.902c-.494-.449-1.136-.629-1.764-.629a2.52 2.52 0 0 0-1.594.565A2.531 2.531 0 0 0 7.76 11.28c0 .698.294 1.353.648 1.898c.36.554.826 1.065 1.27 1.491a15 15 0 0 0 1.745 1.423l.032.022l.01.006l.004.003a.75.75 0 0 0 .832 0"></svg:path>`,
})
export class MynauiHeartCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartDiamondSolidIcon],svg[mynaui-heart-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686m1.511 14.634a.75.75 0 0 1-.832 0l-.005-.003l-.009-.006l-.032-.022l-.117-.081a15 15 0 0 1-1.628-1.341c-.444-.427-.91-.938-1.27-1.492c-.354-.545-.648-1.2-.648-1.898a2.531 2.531 0 0 1 4.125-1.966a2.52 2.52 0 0 1 1.594-.565c.628 0 1.27.18 1.764.629c.505.459.767 1.12.767 1.902c0 .698-.295 1.353-.648 1.898c-.36.554-.826 1.065-1.27 1.491a15 15 0 0 1-1.745 1.423l-.032.022l-.01.006z"></svg:path>`,
})
export class MynauiHeartDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartDotSolidIcon],svg[mynaui-heart-dot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 12a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M12.434 21.112a.75.75 0 0 1-.868 0l-.008-.006l-.021-.015l-.08-.058q-.104-.075-.295-.219a38.5 38.5 0 0 1-4.197-3.674c-1.148-1.168-2.315-2.533-3.199-3.981c-.88-1.44-1.516-3.024-1.516-4.612c0-3.158 2.42-5.797 5.5-5.797c1.724 0 3.248.833 4.25 2.117c1.002-1.284 2.525-2.117 4.25-2.117c1.46 0 2.85.445 3.88 1.439c1.035 1 1.62 2.473 1.62 4.358c0 1.588-.637 3.171-1.516 4.612c-.884 1.448-2.051 2.813-3.199 3.982a38.5 38.5 0 0 1-4.492 3.892l-.047.034l-.033.024l-.021.015zM12 9.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5"></svg:path></svg:g>`,
})
export class MynauiHeartDotSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartHexagonSolidIcon],svg[mynaui-heart-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm1.621 14.019l.005-.003l.009-.006l.032-.022l.117-.081a15 15 0 0 0 1.628-1.341c.444-.427.91-.938 1.27-1.492c.354-.545.648-1.2.648-1.898c0-.782-.262-1.443-.767-1.902c-.494-.449-1.136-.629-1.764-.629a2.52 2.52 0 0 0-1.594.565A2.531 2.531 0 0 0 7.76 11.28c0 .698.294 1.353.648 1.898c.36.554.826 1.065 1.27 1.491a15 15 0 0 0 1.745 1.423l.032.022l.01.006l.004.003a.75.75 0 0 0 .832 0"></svg:path>`,
})
export class MynauiHeartHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartHomeSolidIcon],svg[mynaui-heart-home-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.5 13.5v-1.978l1.5-1.094l1.5 1.094V13.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25"></svg:path><svg:path d="M12.434 21.112a.75.75 0 0 1-.868 0l-.008-.006l-.021-.015l-.08-.058q-.104-.075-.295-.219a38.5 38.5 0 0 1-4.197-3.674c-1.148-1.168-2.315-2.533-3.199-3.981c-.88-1.44-1.516-3.024-1.516-4.612c0-3.158 2.42-5.797 5.5-5.797c1.724 0 3.248.833 4.25 2.117c1.002-1.284 2.525-2.117 4.25-2.117c1.46 0 2.85.445 3.88 1.439c1.035 1 1.62 2.473 1.62 4.358c0 1.588-.637 3.171-1.516 4.612c-.884 1.448-2.051 2.813-3.199 3.982a38.5 38.5 0 0 1-4.492 3.892l-.047.034l-.033.024l-.021.015zm2.258-10.578l-2.25-1.64a.75.75 0 0 0-.884 0l-2.25 1.64A.75.75 0 0 0 9 11.14v2.36c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 15 13.5v-2.36a.75.75 0 0 0-.308-.606"></svg:path></svg:g>`,
})
export class MynauiHeartHomeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartMinusSolidIcon],svg[mynaui-heart-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.434 21.112a.75.75 0 0 1-.868 0l-.008-.006l-.021-.015l-.08-.058q-.104-.075-.295-.219a38.5 38.5 0 0 1-4.197-3.674c-1.148-1.168-2.315-2.533-3.199-3.981c-.88-1.44-1.516-3.024-1.516-4.612c0-3.158 2.42-5.797 5.5-5.797c1.724 0 3.248.833 4.25 2.117c1.002-1.284 2.525-2.117 4.25-2.117c1.46 0 2.85.445 3.88 1.439c1.035 1 1.62 2.473 1.62 4.358c0 1.588-.637 3.171-1.516 4.612c-.884 1.448-2.051 2.813-3.199 3.982a38.5 38.5 0 0 1-4.492 3.892l-.08.058l-.021.015zM10 11.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiHeartMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartOctagonSolidIcon],svg[mynaui-heart-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M12.3 16.124l.005-.003l.009-.006l.032-.022l.117-.081a15 15 0 0 0 1.628-1.341c.444-.427.91-.938 1.27-1.492c.354-.545.648-1.2.648-1.898c0-.782-.262-1.443-.767-1.902c-.494-.449-1.136-.629-1.764-.629a2.52 2.52 0 0 0-1.594.565A2.531 2.531 0 0 0 7.76 11.28c0 .698.294 1.353.648 1.898c.36.554.826 1.065 1.27 1.491a15 15 0 0 0 1.745 1.423l.032.022l.01.006l.004.003a.75.75 0 0 0 .832 0"></svg:path>`,
})
export class MynauiHeartOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartPlusSolidIcon],svg[mynaui-heart-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.434 21.112l.008-.006l.021-.015l.08-.058q.104-.075.295-.219a38.5 38.5 0 0 0 4.197-3.674c1.148-1.168 2.315-2.533 3.199-3.981c.88-1.44 1.516-3.024 1.516-4.612c0-1.885-.585-3.358-1.62-4.358c-1.03-.994-2.42-1.439-3.88-1.439c-1.725 0-3.248.833-4.25 2.117C10.998 3.583 9.474 2.75 7.75 2.75c-3.08 0-5.5 2.639-5.5 5.797c0 1.588.637 3.171 1.516 4.612c.884 1.448 2.051 2.813 3.199 3.982a38.5 38.5 0 0 0 4.492 3.892l.08.058l.021.015l.008.006a.75.75 0 0 0 .867 0M12 9.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V14a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiHeartPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartSlashSolidIcon],svg[mynaui-heart-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.434 21.112a.75.75 0 0 1-.868 0l-.008-.006l-.021-.015l-.08-.058q-.104-.075-.295-.219a39 39 0 0 1-3.72-3.197L3.531 21.53a.75.75 0 0 1-1.06-1.06l3.925-3.925c-.956-1.027-1.891-2.178-2.629-3.386c-.88-1.44-1.516-3.024-1.516-4.612c0-3.158 2.42-5.797 5.5-5.797c1.724 0 3.248.833 4.25 2.117c1.002-1.284 2.525-2.117 4.25-2.117c1.12 0 2.2.262 3.106.833L20.47 2.47a.75.75 0 1 1 1.06 1.06l-1.043 1.044c.812.979 1.263 2.317 1.263 3.973c0 1.588-.637 3.171-1.516 4.612c-.884 1.448-2.051 2.813-3.199 3.982a38.5 38.5 0 0 1-4.492 3.892l-.08.058l-.021.015z"></svg:path>`,
})
export class MynauiHeartSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartSnoozeSolidIcon],svg[mynaui-heart-snooze-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.434 21.112a.75.75 0 0 1-.868 0l-.008-.006l-.021-.015l-.08-.058q-.104-.075-.295-.219a38.5 38.5 0 0 1-4.197-3.674c-1.148-1.168-2.315-2.533-3.199-3.981c-.88-1.44-1.516-3.024-1.516-4.612c0-3.158 2.42-5.797 5.5-5.797c1.724 0 3.248.833 4.25 2.117c1.002-1.284 2.525-2.117 4.25-2.117c1.46 0 2.85.445 3.88 1.439c1.035 1 1.62 2.473 1.62 4.358c0 1.588-.637 3.171-1.516 4.612c-.884 1.448-2.051 2.813-3.199 3.982a38.5 38.5 0 0 1-4.492 3.892l-.047.034l-.033.024l-.021.015zM10.75 9.75a.75.75 0 0 0 0 1.5h1.147l-1.783 2.852a.75.75 0 0 0 .636 1.148h2.5a.75.75 0 0 0 0-1.5h-1.147l1.783-2.852a.75.75 0 0 0-.636-1.148z"></svg:path>`,
})
export class MynauiHeartSnoozeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartSolidIcon],svg[mynaui-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.566 21.112L12 20.5za.75.75 0 0 0 .867 0L12 20.5l.434.612l.008-.006l.021-.015l.08-.058q.104-.075.295-.219a38.5 38.5 0 0 0 4.197-3.674c1.148-1.168 2.315-2.533 3.199-3.981c.88-1.44 1.516-3.024 1.516-4.612c0-1.885-.585-3.358-1.62-4.358c-1.03-.994-2.42-1.439-3.88-1.439c-1.725 0-3.248.833-4.25 2.117C10.998 3.583 9.474 2.75 7.75 2.75c-3.08 0-5.5 2.639-5.5 5.797c0 1.588.637 3.171 1.516 4.612c.884 1.448 2.051 2.813 3.199 3.982a38.5 38.5 0 0 0 4.492 3.892l.08.058l.021.015z"></svg:path>`,
})
export class MynauiHeartSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartSquareSolidIcon],svg[mynaui-heart-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m2.934 13.874l.005-.003l.009-.006l.032-.022l.117-.081a15 15 0 0 0 1.628-1.341c.444-.427.91-.938 1.27-1.492c.354-.545.648-1.2.648-1.898c0-.782-.262-1.443-.767-1.902c-.494-.449-1.136-.629-1.764-.629a2.52 2.52 0 0 0-1.594.565A2.531 2.531 0 0 0 7.76 11.28c0 .698.294 1.353.648 1.898c.36.554.826 1.065 1.27 1.491a15 15 0 0 0 1.745 1.423l.032.022l.01.006l.004.003a.75.75 0 0 0 .832 0"></svg:path>`,
})
export class MynauiHeartSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartUserSolidIcon],svg[mynaui-heart-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 10.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M12.434 21.112a.75.75 0 0 1-.868 0l-.008-.006l-.021-.015l-.08-.058q-.104-.075-.295-.219a38.5 38.5 0 0 1-4.197-3.674c-1.148-1.168-2.315-2.533-3.199-3.981c-.88-1.44-1.516-3.024-1.516-4.612c0-3.158 2.42-5.797 5.5-5.797c1.724 0 3.248.833 4.25 2.117c1.002-1.284 2.525-2.117 4.25-2.117c1.46 0 2.85.445 3.88 1.439c1.035 1 1.62 2.473 1.62 4.358c0 1.588-.637 3.171-1.516 4.612c-.884 1.448-2.051 2.813-3.199 3.982a38.5 38.5 0 0 1-4.492 3.892l-.047.034l-.033.024l-.021.015zM12 7.75a2.75 2.75 0 0 0-2.01 4.627q-.286.164-.54.382c-.734.629-1.2 1.563-1.2 2.741a.75.75 0 0 0 1.5 0c0-.752.284-1.266.676-1.603c.408-.35.977-.543 1.574-.543s1.166.193 1.574.543c.392.337.676.85.676 1.603a.75.75 0 0 0 1.5 0c0-1.178-.466-2.112-1.2-2.741a3.6 3.6 0 0 0-.54-.382A2.75 2.75 0 0 0 12 7.75"></svg:path></svg:g>`,
})
export class MynauiHeartUserSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartWavesSolidIcon],svg[mynaui-heart-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m1.736 14.049l.005-.003l.009-.006l.032-.022l.117-.081a15 15 0 0 0 1.628-1.341c.444-.427.91-.938 1.27-1.492c.354-.545.648-1.2.648-1.898c0-.782-.262-1.443-.767-1.902c-.494-.449-1.136-.629-1.764-.629a2.52 2.52 0 0 0-1.594.565A2.531 2.531 0 0 0 7.76 11.28c0 .698.294 1.353.648 1.898c.36.554.826 1.065 1.27 1.491a15 15 0 0 0 1.745 1.423l.032.022l.01.006l.004.003a.75.75 0 0 0 .832 0"></svg:path>`,
})
export class MynauiHeartWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartXSolidIcon],svg[mynaui-heart-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.434 21.112l.008-.006l.021-.015l.08-.058q.104-.075.295-.219a38.5 38.5 0 0 0 4.197-3.674c1.148-1.168 2.315-2.533 3.199-3.981c.88-1.44 1.516-3.024 1.516-4.612c0-1.885-.585-3.358-1.62-4.358c-1.03-.994-2.42-1.439-3.88-1.439c-1.725 0-3.248.833-4.25 2.117C10.998 3.583 9.474 2.75 7.75 2.75c-3.08 0-5.5 2.639-5.5 5.797c0 1.588.637 3.171 1.516 4.612c.884 1.448 2.051 2.813 3.199 3.982a38.5 38.5 0 0 0 4.492 3.892l.08.058l.021.015l.008.006a.75.75 0 0 0 .867 0M9.97 10.47a.75.75 0 0 1 1.06 0l.884.884l.884-.884a.75.75 0 0 1 1.06 1.06l-.883.884l.884.884a.75.75 0 0 1-1.06 1.06l-.885-.883l-.884.884a.75.75 0 1 1-1.06-1.06l.884-.885l-.884-.884a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiHeartXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHexagonSolidIcon],svg[mynaui-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75a2.63 2.63 0 0 0-1.32.355l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002A2.63 2.63 0 0 0 12 1.75"></svg:path>`,
})
export class MynauiHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHomeCheckSolidIcon],svg[mynaui-home-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.191 2.9L4.325 7.718a2.96 2.96 0 0 0-1.075 2.29v8.802c0 1.605 1.273 2.94 2.883 2.94h11.734c1.61 0 2.883-1.335 2.883-2.94v-8.802a2.96 2.96 0 0 0-1.075-2.29L13.81 2.9a2.84 2.84 0 0 0-3.618 0m4.573 7.492a.75.75 0 0 1 .17 1.047l-2.8 3.876a1.05 1.05 0 0 1-1.64.077l-1.378-1.576a.75.75 0 1 1 1.129-.987l1.005 1.148l2.467-3.416a.75.75 0 0 1 1.047-.169"></svg:path>`,
})
export class MynauiHomeCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHomeMinusSolidIcon],svg[mynaui-home-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.191 2.9a2.84 2.84 0 0 1 3.618 0l5.866 4.818a2.96 2.96 0 0 1 1.075 2.29v8.802c0 1.605-1.273 2.94-2.883 2.94H6.133c-1.61 0-2.883-1.335-2.883-2.94v-8.802c0-.886.392-1.73 1.075-2.29zM9.5 12.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiHomeMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHomePlusSolidIcon],svg[mynaui-home-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.191 2.9L4.325 7.718a2.96 2.96 0 0 0-1.075 2.29v8.802c0 1.605 1.273 2.94 2.883 2.94h11.734c1.61 0 2.883-1.335 2.883-2.94v-8.802a2.96 2.96 0 0 0-1.075-2.29L13.81 2.9a2.84 2.84 0 0 0-3.618 0M12 10.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75V16a.75.75 0 0 1-1.5 0v-1.75H9.5a.75.75 0 0 1 0-1.5h1.75V11a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiHomePlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHomeSmileSolidIcon],svg[mynaui-home-smile-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.191 2.9a2.84 2.84 0 0 1 3.618 0l5.866 4.818a2.96 2.96 0 0 1 1.075 2.29v8.802c0 1.605-1.273 2.94-2.883 2.94H6.133c-1.61 0-2.883-1.335-2.883-2.94v-8.802c0-.886.392-1.73 1.075-2.29zm.059 8.1a.75.75 0 1 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm5 0a.75.75 0 1 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm-5.803 4.398a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 0 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852"></svg:path>`,
})
export class MynauiHomeSmileSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHomeSolidIcon],svg[mynaui-home-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.857 4.06l5.866 4.817c.33.27.527.686.527 1.13v8.803c0 .814-.638 1.44-1.383 1.44H15.25V15.5a2.75 2.75 0 0 0-2.75-2.75h-1a2.75 2.75 0 0 0-2.75 2.75v4.75H6.133c-.745 0-1.383-.626-1.383-1.44v-8.802c0-.445.197-.86.527-1.13l5.866-4.819a1.34 1.34 0 0 1 1.714 0m5.01 17.69c1.61 0 2.883-1.335 2.883-2.94v-8.802a2.96 2.96 0 0 0-1.075-2.29L13.81 2.9a2.84 2.84 0 0 0-3.618 0L4.325 7.718a2.96 2.96 0 0 0-1.075 2.29v8.802c0 1.605 1.273 2.94 2.883 2.94z"></svg:path>`,
})
export class MynauiHomeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiHomeXSolidIcon],svg[mynaui-home-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.191 2.9L4.325 7.718a2.96 2.96 0 0 0-1.075 2.29v8.802c0 1.605 1.273 2.94 2.883 2.94h11.734c1.61 0 2.883-1.335 2.883-2.94v-8.802a2.96 2.96 0 0 0-1.075-2.29L13.81 2.9a2.84 2.84 0 0 0-3.618 0m-.721 8.07a.75.75 0 0 1 1.06 0L12 12.44l1.47-1.47a.75.75 0 1 1 1.06 1.06l-1.47 1.47l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 14.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiHomeXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiImageCircleSolidIcon],svg[mynaui-image-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.75 9a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M20.16 10.78c-5.667-.42-10.375 3.7-10.41 9.16c.715.202 1.47.31 2.25.31a8.25 8.25 0 0 0 8.16-9.47M8.268 19.36c.06-1.046.268-2.043.603-2.974c-1.082-1.593-2.886-2.639-4.935-2.636a8.26 8.26 0 0 0 4.332 5.61M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m4-3a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path></svg:g>`,
})
export class MynauiImageCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiImageRectangleSolidIcon],svg[mynaui-image-rectangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.75 9a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M7.125 3.75h9.75c.813 0 1.468 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.364 1.47c.044.531.044 1.187.044 2v5.464c0 .813 0 1.469-.044 2c-.044.546-.139 1.026-.365 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.532.043-1.187.043-2 .043h-9.75c-.813 0-1.468 0-2-.043c-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.225-.444-.32-.924-.364-1.47c-.044-.531-.044-1.187-.044-2V9.268c0-.813 0-1.469.044-2c.044-.546.139-1.026.365-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.532-.043 1.187-.043 2-.043m3.603 15h6.115c.852 0 1.447 0 1.91-.038c.453-.038.714-.107.911-.207c.424-.216.768-.56.984-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.057.038-1.909V9.74l-.068-.007c-3.09-.424-5.68.51-7.458 2.264c-1.194 1.178-2.043 2.749-2.42 4.577a1 1 0 0 1-.03.143q-.186.974-.189 2.033m-1.324-2.09c-.601-.845-1.523-1.616-2.602-2.153c-1.177-.586-2.486-.865-3.695-.7v.893c0 .853 0 1.447.039 1.91c.037.453.106.714.206.912c.216.423.56.767.984.983c.197.1.458.17.912.207c.462.037 1.057.038 1.91.038h2.07q.001-1.078.176-2.09M5.25 9a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path></svg:g>`,
})
export class MynauiImageRectangleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiImageSolidIcon],svg[mynaui-image-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.25 8a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.46-1.869c-.058-.697-.058-1.563-.058-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M3.75 13.753v.847c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.389.032.845.044 1.404.049c-.046-1.392.167-2.71.593-3.92c-1.12-1.606-2.98-2.641-5.08-2.574m16.5-3.084c-5.863-.493-10.727 3.874-10.511 9.581h4.86c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.052-.63.052-1.434.052-2.566zM5.75 8a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path></svg:g>`,
})
export class MynauiImageSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInboxArchiveSolidIcon],svg[mynaui-inbox-archive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.76 2.25a2.75 2.75 0 0 1 2.462 1.526a1 1 0 0 1 .051.135l2.163 7.846a8.8 8.8 0 0 1 .314 2.325V19A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19v-4.918c0-.785.106-1.567.314-2.325l2.163-7.846a1 1 0 0 1 .051-.135A2.75 2.75 0 0 1 7.24 2.25zm.31 11.5a1.25 1.25 0 0 0-1.04.557l-.812 1.218a2.75 2.75 0 0 1-2.288 1.225h-1.86a2.75 2.75 0 0 1-2.288-1.225l-.812-1.218a1.25 1.25 0 0 0-1.04-.557H3.758q-.008.165-.008.332V19A1.25 1.25 0 0 0 5 20.25h14A1.25 1.25 0 0 0 20.25 19v-4.918q0-.165-.008-.332zm-6.57-8a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-1.5 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiInboxArchiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInboxCheckSolidIcon],svg[mynaui-inbox-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.76 2.25H7.24a2.75 2.75 0 0 0-2.462 1.526a1 1 0 0 0-.051.135l-2.163 7.846a8.8 8.8 0 0 0-.314 2.325V19A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19v-4.918a8.8 8.8 0 0 0-.314-2.325l-2.163-7.846a1 1 0 0 0-.051-.135A2.75 2.75 0 0 0 16.76 2.25m.31 11.5h3.172q.008.165.008.332V19A1.25 1.25 0 0 1 19 20.25H5A1.25 1.25 0 0 1 3.75 19v-4.918q0-.165.008-.332H6.93c.418 0 .808.209 1.04.557l.812 1.218a2.75 2.75 0 0 0 2.288 1.225h1.86c.92 0 1.778-.46 2.288-1.225l.812-1.218a1.25 1.25 0 0 1 1.04-.557m-2.678-6.31l-2.1 2.906a.974.974 0 0 1-1.522.071L9.736 9.236a.75.75 0 1 1 1.128-.988l.6.684l1.712-2.371a.75.75 0 1 1 1.216.878"></svg:path>`,
})
export class MynauiInboxCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInboxDownSolidIcon],svg[mynaui-inbox-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.76 2.25a2.75 2.75 0 0 1 2.462 1.526a1 1 0 0 1 .051.135l2.163 7.846a8.8 8.8 0 0 1 .314 2.325V19A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19v-4.918c0-.785.106-1.567.314-2.325l2.163-7.846a1 1 0 0 1 .051-.135A2.75 2.75 0 0 1 7.24 2.25zm.31 11.5a1.25 1.25 0 0 0-1.04.557l-.812 1.218a2.75 2.75 0 0 1-2.288 1.225h-1.86a2.75 2.75 0 0 1-2.288-1.225l-.812-1.218a1.25 1.25 0 0 0-1.04-.557H3.758q-.008.165-.008.332V19A1.25 1.25 0 0 0 5 20.25h14A1.25 1.25 0 0 0 20.25 19v-4.918q0-.165-.008-.332zM12.753 6a.75.75 0 0 0-1.5 0l-.002 4.11l-1.205-1.278a.75.75 0 0 0-1.092 1.029l2.5 2.653a.75.75 0 0 0 1.092 0l2.5-2.653a.75.75 0 0 0-1.092-1.029l-1.203 1.278z"></svg:path>`,
})
export class MynauiInboxDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInboxMinusSolidIcon],svg[mynaui-inbox-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.76 2.25H7.24a2.75 2.75 0 0 0-2.462 1.526a1 1 0 0 0-.051.135l-2.163 7.846a8.8 8.8 0 0 0-.314 2.325V19A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19v-4.918a8.8 8.8 0 0 0-.314-2.325l-2.163-7.846a1 1 0 0 0-.051-.135A2.75 2.75 0 0 0 16.76 2.25m.31 11.5h3.172q.008.165.008.332V19A1.25 1.25 0 0 1 19 20.25H5A1.25 1.25 0 0 1 3.75 19v-4.918q0-.165.008-.332H6.93c.418 0 .808.209 1.04.557l.812 1.218a2.75 2.75 0 0 0 2.288 1.225h1.86c.92 0 1.778-.46 2.288-1.225l.812-1.218a1.25 1.25 0 0 1 1.04-.557m-7.07-6h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class MynauiInboxMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInboxPlusSolidIcon],svg[mynaui-inbox-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.76 2.25H7.24a2.75 2.75 0 0 0-2.462 1.526a1 1 0 0 0-.051.135l-2.163 7.846a8.8 8.8 0 0 0-.314 2.325V19A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19v-4.918a8.8 8.8 0 0 0-.314-2.325l-2.163-7.846a1 1 0 0 0-.051-.135A2.75 2.75 0 0 0 16.76 2.25m.31 11.5h3.172q.008.165.008.332V19A1.25 1.25 0 0 1 19 20.25H5A1.25 1.25 0 0 1 3.75 19v-4.918q0-.165.008-.332H6.93c.418 0 .808.209 1.04.557l.812 1.218a2.75 2.75 0 0 0 2.288 1.225h1.86c.92 0 1.778-.46 2.288-1.225l.812-1.218a1.25 1.25 0 0 1 1.04-.557M12.75 6.5v1.25H14a.75.75 0 0 1 0 1.5h-1.25v1.25a.75.75 0 0 1-1.5 0V9.25H10a.75.75 0 0 1 0-1.5h1.25V6.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiInboxPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInboxSolidIcon],svg[mynaui-inbox-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.24 2.25h9.52a2.75 2.75 0 0 1 2.462 1.526a1 1 0 0 1 .051.135l2.163 7.846a8.8 8.8 0 0 1 .314 2.325V19A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19v-4.918c0-.785.106-1.567.314-2.325l2.163-7.846a1 1 0 0 1 .051-.135A2.75 2.75 0 0 1 7.24 2.25m13.002 11.5H17.07a1.25 1.25 0 0 0-1.04.557l-.812 1.218a2.75 2.75 0 0 1-2.288 1.225h-1.86a2.75 2.75 0 0 1-2.288-1.225l-.812-1.218a1.25 1.25 0 0 0-1.04-.557H3.758q-.008.165-.008.332V19A1.25 1.25 0 0 0 5 20.25h14A1.25 1.25 0 0 0 20.25 19v-4.918q0-.165-.008-.332"></svg:path>`,
})
export class MynauiInboxSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInboxUpSolidIcon],svg[mynaui-inbox-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.76 2.25H7.24a2.75 2.75 0 0 0-2.462 1.526a1 1 0 0 0-.051.135l-2.163 7.846a8.8 8.8 0 0 0-.314 2.325V19A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19v-4.918a8.8 8.8 0 0 0-.314-2.325l-2.163-7.846a1 1 0 0 0-.051-.135A2.75 2.75 0 0 0 16.76 2.25m.31 11.5h3.172q.008.165.008.332V19A1.25 1.25 0 0 1 19 20.25H5A1.25 1.25 0 0 1 3.75 19v-4.918q0-.165.008-.332H6.93c.418 0 .808.209 1.04.557l.812 1.218a2.75 2.75 0 0 0 2.288 1.225h1.86c.92 0 1.778-.46 2.288-1.225l.812-1.218a1.25 1.25 0 0 1 1.04-.557m-4.524-8.264l2.5 2.653a.75.75 0 0 1-1.092 1.029L12.751 7.89l.002 4.11a.75.75 0 0 1-1.5 0l-.002-4.11l-1.205 1.278a.75.75 0 0 1-1.092-1.029l2.5-2.653a.75.75 0 0 1 1.092 0"></svg:path>`,
})
export class MynauiInboxUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInboxXSolidIcon],svg[mynaui-inbox-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.76 2.25H7.24a2.75 2.75 0 0 0-2.462 1.526a1 1 0 0 0-.051.135l-2.163 7.846a8.8 8.8 0 0 0-.314 2.325V19A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19v-4.918a8.8 8.8 0 0 0-.314-2.325l-2.163-7.846a1 1 0 0 0-.051-.135A2.75 2.75 0 0 0 16.76 2.25m.31 11.5h3.172q.008.165.008.332V19A1.25 1.25 0 0 1 19 20.25H5A1.25 1.25 0 0 1 3.75 19v-4.918q0-.165.008-.332H6.93c.418 0 .808.209 1.04.557l.812 1.218a2.75 2.75 0 0 0 2.288 1.225h1.86c.92 0 1.778-.46 2.288-1.225l.812-1.218a1.25 1.25 0 0 1 1.04-.557m-6.04-7.28l.97.97l.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97l.97.97a.75.75 0 1 1-1.06 1.06L12 9.56l-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97l-.97-.97a.75.75 0 0 1 1.06-1.06"></svg:path>`,
})
export class MynauiInboxXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiIncognitoSolidIcon],svg[mynaui-incognito-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.58 9.405l.059.257H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h1.362l.532-2.255c.264-1.118.477-2.02.73-2.722c.261-.727.593-1.323 1.144-1.779c.213-.176.476-.32.794-.343c.312-.022.568.082.744.176c.136.072.28.17.393.247l.06.041c.136.092.27.177.423.254c.647.324 1.506.103 2.521-.393c.607-.297 1.442-.502 2.246-.59c.795-.086 1.68-.071 2.362.162c.598.204 1.003.478 1.294.923c.129.196.22.404.297.591l.09.224c.047.12.094.239.157.385c.673 1.564 1.061 3.236 1.43 4.822M6.5 13.25a4.25 4.25 0 1 0 4.189 3.528l.32-.17a2.1 2.1 0 0 1 1.982 0l.32.17q-.06.353-.061.722a4.25 4.25 0 1 0 .58-2.145l-.137-.072a3.6 3.6 0 0 0-3.386 0l-.137.072A4.25 4.25 0 0 0 6.5 13.25"></svg:path>`,
})
export class MynauiIncognitoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiIndifferentCircleSolidIcon],svg[mynaui-indifferent-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m6 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m2-5.5v.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 1.5 0m4.25-.75a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiIndifferentCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiIndifferentGhostSolidIcon],svg[mynaui-indifferent-ghost-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12.044v6.517c0 .764.308 1.57.8 2.127c.501.567 1.354 1.012 2.287.543c.696-.35 1.275-.363 1.746-.047c1.126.755 2.708.755 3.834 0c.345-.23.607-.308.825-.31c.218-.001.485.072.84.31c1.127.755 2.709.755 3.835 0c.213-.142.58-.237 1.044-.226c.454.01.898.12 1.202.273c.933.469 1.786.024 2.287-.543c.492-.557.8-1.363.8-2.126v-6.518c0-5.405-4.362-9.794-9.75-9.794s-9.75 4.389-9.75 9.794m6 3.456a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m2-5.5v.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 1.5 0m4.25-.75a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiIndifferentGhostSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiIndifferentSquareSolidIcon],svg[mynaui-indifferent-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM8.25 15.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m2-5.5v.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 1.5 0m4.25-.75a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiIndifferentSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInfinitySolidIcon],svg[mynaui-infinity-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8.75a3.25 3.25 0 0 0 0 6.5c.935 0 1.71-.435 2.469-1.196a.75.75 0 0 1 1.063 1.058c-.92.923-2.054 1.638-3.532 1.638a4.75 4.75 0 1 1 0-9.5c1.376 0 2.457.621 3.342 1.454c.856.805 1.581 1.86 2.25 2.834l.026.037c.699 1.017 1.34 1.944 2.068 2.629c.709.667 1.44 1.046 2.314 1.046a3.25 3.25 0 0 0 0-6.5c-.935 0-1.71.435-2.469 1.196a.75.75 0 0 1-1.062-1.058C14.387 7.965 15.522 7.25 17 7.25a4.75 4.75 0 1 1 0 9.5c-1.376 0-2.457-.621-3.342-1.454c-.856-.805-1.581-1.86-2.25-2.834l-.026-.037c-.699-1.017-1.34-1.944-2.068-2.629C8.605 9.13 7.874 8.75 7 8.75"></svg:path>`,
})
export class MynauiInfinitySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInfoCircleSolidIcon],svg[mynaui-info-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M10.75 16a.75.75 0 0 1 .5-.707v-3.586a.75.75 0 0 1 .25-1.457h.5a.75.75 0 0 1 .75.75v4.293a.75.75 0 0 1-.25 1.457h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiInfoCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInfoDiamondSolidIcon],svg[mynaui-info-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a3.16 3.16 0 0 0-2.235.926L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588A3.16 3.16 0 0 0 12 1.25m0 6a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M10.75 16a.75.75 0 0 1 .5-.707v-3.586a.75.75 0 0 1 .25-1.457h.5a.75.75 0 0 1 .75.75v4.293a.75.75 0 0 1-.25 1.457h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiInfoDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInfoHexagonSolidIcon],svg[mynaui-info-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75a2.63 2.63 0 0 0-1.32.355l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002A2.63 2.63 0 0 0 12 1.75m0 5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M10.75 16a.75.75 0 0 1 .5-.707v-3.586a.75.75 0 0 1 .25-1.457h.5a.75.75 0 0 1 .75.75v4.293a.75.75 0 0 1-.25 1.457h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiInfoHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInfoOctagonSolidIcon],svg[mynaui-info-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.937 2.25a2.3 2.3 0 0 0-.9.158c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158zm3.063 5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M10.75 16a.75.75 0 0 1 .5-.707v-3.586a.75.75 0 0 1 .25-1.457h.5a.75.75 0 0 1 .75.75v4.293a.75.75 0 0 1-.25 1.457h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiInfoOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInfoSolidIcon],svg[mynaui-info-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75M10.75 9.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v9.293a.75.75 0 0 1-.25 1.457h-1a.75.75 0 0 1-.25-1.457v-8.586a.75.75 0 0 1-.5-.707"></svg:path>`,
})
export class MynauiInfoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInfoSquareSolidIcon],svg[mynaui-info-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm2.633 5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M10.75 16a.75.75 0 0 1 .5-.707v-3.586a.75.75 0 0 1 .25-1.457h.5a.75.75 0 0 1 .75.75v4.293a.75.75 0 0 1-.25 1.457h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiInfoSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInfoTriangleSolidIcon],svg[mynaui-info-triangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.583 4.507C9.538 3.159 10.582 2.25 12 2.25s2.462.91 3.417 2.257c.948 1.338 1.953 3.318 3.24 5.852l.39.769c1.065 2.098 1.904 3.75 2.344 5.076c.448 1.348.55 2.552-.121 3.623c-.67 1.066-1.801 1.511-3.22 1.719c-1.398.204-3.272.204-5.656.204h-.788c-2.384 0-4.258 0-5.656-.204c-1.419-.208-2.55-.653-3.22-1.72c-.671-1.07-.569-2.274-.12-3.622c.44-1.325 1.278-2.978 2.344-5.076l.39-.768c1.286-2.535 2.29-4.515 3.24-5.853M12.75 9a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm-1.25 2.25a.75.75 0 0 0-.25 1.457v3.586a.75.75 0 0 0 .25 1.457h1a.75.75 0 0 0 .25-1.457V12a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiInfoTriangleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiInfoWavesSolidIcon],svg[mynaui-info-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.435 2.075a3.33 3.33 0 0 0-2.87 0c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.078.066c.506.431.867.74 1.261.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928M12 7.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M10.75 16a.75.75 0 0 1 .5-.707v-3.586a.75.75 0 0 1 .25-1.457h.5a.75.75 0 0 1 .75.75v4.293a.75.75 0 0 1-.25 1.457h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiInfoWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiIntersectSolidIcon],svg[mynaui-intersect-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.25a.75.75 0 0 0-.75.75v1.8a.75.75 0 0 0 1.5 0V3.75H4.8a.75.75 0 0 0 0-1.5zm5.4 0a.75.75 0 0 0 0 1.5h1.8a.75.75 0 0 0 0-1.5zm5.4 0a.75.75 0 0 0 0 1.5h1.05v.6a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-.75-.75zm2.55 5.25a.75.75 0 0 0-1.5 0v.15h-1.682c-.813 0-1.469 0-2 .043c-.546.045-1.026.14-1.47.366a3.75 3.75 0 0 0-1.64 1.639c-.226.444-.32.924-.365 1.47c-.043.531-.043 1.187-.043 2v1.682H7.5a.75.75 0 0 0 0 1.5h.15v.15a.75.75 0 0 0 1.5 0v-.15h1.682c.813 0 1.469 0 2-.043c.546-.045 1.026-.14 1.47-.366a3.75 3.75 0 0 0 1.64-1.639c.226-.444.32-.924.365-1.47c.043-.531.043-1.187.043-2V9.15h.15a.75.75 0 0 0 0-1.5h-.15zm-12.6.9a.75.75 0 0 0-1.5 0v1.8a.75.75 0 0 0 1.5 0zm15.9-.75a.75.75 0 0 0 0 1.5h.6v1.05a.75.75 0 0 0 1.5 0V8.4a.75.75 0 0 0-.75-.75zM3.75 13.8a.75.75 0 0 0-1.5 0v1.8c0 .414.336.75.75.75h1.35a.75.75 0 0 0 0-1.5h-.6zm18 0a.75.75 0 0 0-1.5 0v1.8a.75.75 0 0 0 1.5 0zm0 5.4a.75.75 0 0 0-1.5 0v1.05H19.2a.75.75 0 0 0 0 1.5H21a.75.75 0 0 0 .75-.75zm-12.6.45a.75.75 0 0 0-1.5 0V21c0 .414.336.75.75.75h1.8a.75.75 0 0 0 0-1.5H9.15zm4.65.6a.75.75 0 0 0 0 1.5h1.8a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiIntersectSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiKeySolidIcon],svg[mynaui-key-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 11.25a5.25 5.25 0 1 0 4.205 2.106l3.444-3.444l1.002 1.002c.344.344.788.59 1.317.493c.437-.08.763-.378.947-.552l.197-.188c.354-.34.577-.554.927-.612c.268-.045.602-.124.908-.315a1.73 1.73 0 0 0 .732-.934a1.7 1.7 0 0 0-.035-1.206c-.149-.368-.411-.698-.719-1.005l-.98-.98L21.53 3.53a.75.75 0 0 0-1.06-1.06l-9.826 9.825A5.23 5.23 0 0 0 7.5 11.25"></svg:path>`,
})
export class MynauiKeySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiKeyboardBrightnessHighSolidIcon],svg[mynaui-keyboard-brightness-high-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m7.193 3.32a.75.75 0 0 1-.184 1.044l-2.457 1.721a.75.75 0 0 1-.86-1.229l2.457-1.72a.75.75 0 0 1 1.044.184m-14.807 0a.75.75 0 0 1 1.044-.184l2.458 1.72a.75.75 0 1 1-.86 1.23L4.57 11.613a.75.75 0 0 1-.184-1.044M2.25 17a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m7 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiKeyboardBrightnessHighSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiKeyboardBrightnessLowSolidIcon],svg[mynaui-keyboard-brightness-low-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m-7.53 2.72a.75.75 0 0 1 1.06 0l.707.707a.75.75 0 1 1-1.06 1.06l-.707-.707a.75.75 0 0 1 0-1.06m14.767 0a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 1 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0M2.25 17a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m5 0a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m12 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiKeyboardBrightnessLowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiKeyboardSolidIcon],svg[mynaui-keyboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.608 4.367c.867-.117 1.97-.117 3.337-.117h8.11c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v2.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-2.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981M5 8.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm6 0a.75.75 0 0 0 0 1.5h3a.75.75 0 1 0 0-1.5zm6 0a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm-12 3a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm5 0a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm6 0a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-9 4a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiKeyboardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLabelSolidIcon],svg[mynaui-label-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 4.025A1.75 1.75 0 0 1 4.025 2.25l7.488.095a2.75 2.75 0 0 1 1.913.807l7.299 7.298c.423.423.798 1.034.952 1.687c.156.664.096 1.476-.529 2.1l-6.91 6.911c-.625.625-1.437.685-2.101.529a3.66 3.66 0 0 1-1.687-.952l-7.298-7.299a2.76 2.76 0 0 1-.807-1.913zm5.592 2.29a.75.75 0 0 0-1.06 1.06l.707.708a.75.75 0 0 0 1.06-1.061z"></svg:path>`,
})
export class MynauiLabelSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLampSolidIcon],svg[mynaui-lamp-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.386 2.25A2.75 2.75 0 0 0 7.8 4.065l-2.513 7.702A.75.75 0 0 0 6 12.75h5.25v7.5H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-7.5H18a.75.75 0 0 0 .713-.983L16.2 4.065l-.011-.03a2.75 2.75 0 0 0-2.575-1.785z"></svg:path>`,
})
export class MynauiLampSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLayersOneSolidIcon],svg[mynaui-layers-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.305 7.315a.75.75 0 0 0-.61 0l-9 4a.75.75 0 0 0 0 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0 0-1.37z"></svg:path>`,
})
export class MynauiLayersOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLayersThreeSolidIcon],svg[mynaui-layers-three-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.305 3.315a.75.75 0 0 0-.61 0l-9 4a.75.75 0 0 0 0 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0 0-1.37z"></svg:path><svg:path d="M3.305 11.315a.75.75 0 0 0-.61 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0-.61-1.37L12 15.179z"></svg:path><svg:path d="M3.305 15.315a.75.75 0 0 0-.61 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0-.61-1.37L12 19.179z"></svg:path></svg:g>`,
})
export class MynauiLayersThreeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLayersTwoSolidIcon],svg[mynaui-layers-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.305 5.315a.75.75 0 0 0-.61 0l-9 4a.75.75 0 0 0 0 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 0 0 0-1.37z"></svg:path><svg:path d="M3.305 13.315a.75.75 0 1 0-.61 1.37l9 4a.75.75 0 0 0 .61 0l9-4a.75.75 0 1 0-.61-1.37L12 17.179z"></svg:path></svg:g>`,
})
export class MynauiLayersTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLayoutSolidIcon],svg[mynaui-layout-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.288 2.307c-.697-.057-1.563-.057-2.655-.057H9.367c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.046.56-.055 1.23-.057 2.038h19.5c-.002-.808-.011-1.477-.057-2.038c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461m4.405 14.981c.057-.697.057-1.563.057-2.655V10.25h-12v11.5h4.883c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869M4.844 21.232c.55.281 1.154.403 1.868.461c.44.036.948.05 1.538.054V10.25h-6v4.383c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075"></svg:path>`,
})
export class MynauiLayoutSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLeafSolidIcon],svg[mynaui-leaf-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.037 17.903c.126.238.514.783 1.06 1.06L4.53 20.53a.75.75 0 1 1-1.06-1.06z"></svg:path><svg:path d="M6.097 18.964c1.828.997 3.611 1.435 5.275 1.326c1.826-.12 3.447-.897 4.758-2.208c2.599-2.599 3.943-7.24 3.555-13.067a.75.75 0 0 0-.699-.699C13.16 3.928 8.517 5.272 5.92 7.87c-1.31 1.311-2.088 2.933-2.208 4.76c-.11 1.662.329 3.446 1.326 5.273L9.57 13.37a.75.75 0 1 1 1.06 1.06z"></svg:path></svg:g>`,
})
export class MynauiLeafSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLeavesSolidIcon],svg[mynaui-leaves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.088 3.25a.75.75 0 0 0-.75.643a9 9 0 0 0-.088 1.24c0 4.548 3.524 8.27 8 8.647V20a.75.75 0 0 0 1.5 0v-6.22c4.476-.377 8-4.1 8-8.648q0-.63-.089-1.24a.75.75 0 0 0-.75-.642A8.76 8.76 0 0 0 12 8.407A8.76 8.76 0 0 0 4.088 3.25"></svg:path>`,
})
export class MynauiLeavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterACircleSolidIcon],svg[mynaui-letter-a-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.918 12.083h-1.836L12 9.636z"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m10.452-4.763a.75.75 0 0 0-1.404 0l-3 8a.75.75 0 1 0 1.404.526l.818-2.18h2.96l.818 2.18a.75.75 0 1 0 1.404-.526z"></svg:path></svg:g>`,
})
export class MynauiLetterACircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterADiamondSolidIcon],svg[mynaui-letter-a-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.918 12.083h-1.836L12 9.636z"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m1.912 5.747a.75.75 0 0 0-1.404 0l-3 8a.75.75 0 1 0 1.404.526l.818-2.18h2.96l.818 2.18a.75.75 0 1 0 1.404-.526z"></svg:path></svg:g>`,
})
export class MynauiLetterADiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterAHexagonSolidIcon],svg[mynaui-letter-a-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.918 12.083h-1.836L12 9.636z"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm2.022 5.132a.75.75 0 0 0-1.404 0l-3 8a.75.75 0 1 0 1.404.526l.818-2.18h2.96l.818 2.18a.75.75 0 1 0 1.404-.526z"></svg:path></svg:g>`,
})
export class MynauiLetterAHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterAOctagonSolidIcon],svg[mynaui-letter-a-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.918 12.083h-1.836L12 9.636z"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m4.665 4.829a.75.75 0 0 0-1.404 0l-3 8a.75.75 0 1 0 1.404.526l.818-2.18h2.96l.818 2.18a.75.75 0 1 0 1.404-.526z"></svg:path></svg:g>`,
})
export class MynauiLetterAOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterASolidIcon],svg[mynaui-letter-a-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 6a1 1 0 0 0-.936.649l-3.75 10a1 1 0 1 0 1.872.702l1.007-2.684h3.614l1.007 2.684a1 1 0 0 0 1.872-.702l-3.75-10A1 1 0 0 0 11.75 6m0 3.848l1.057 2.819h-2.114z"></svg:path>`,
})
export class MynauiLetterASolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterASquareSolidIcon],svg[mynaui-letter-a-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.918 12.083h-1.836L12 9.636z"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m3.335 4.987a.75.75 0 0 0-1.404 0l-3 8a.75.75 0 1 0 1.404.526l.818-2.18h2.96l.818 2.18a.75.75 0 1 0 1.404-.526z"></svg:path></svg:g>`,
})
export class MynauiLetterASquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterAWavesSolidIcon],svg[mynaui-letter-a-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.918 12.083h-1.836L12 9.636z"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m2.137 5.162a.75.75 0 0 0-1.404 0l-3 8a.75.75 0 1 0 1.404.526l.818-2.18h2.96l.818 2.18a.75.75 0 1 0 1.404-.526z"></svg:path></svg:g>`,
})
export class MynauiLetterAWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterBCircleSolidIcon],svg[mynaui-letter-b-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.241 9.8c.064.602-.204 1.191-.761 1.45h-3.23v-2.5h2.921c.62 0 1.005.425 1.07 1.05m-3.991 5.45v-2.5h3.23c.557.259.825.848.761 1.45c-.065.625-.45 1.05-1.07 1.05z"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h3.671c1.572 0 2.437-1.204 2.562-2.393c.085-.806-.153-1.706-.767-2.357c.614-.651.852-1.551.767-2.357c-.125-1.19-.99-2.393-2.562-2.393z"></svg:path></svg:g>`,
})
export class MynauiLetterBCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterBDiamondSolidIcon],svg[mynaui-letter-b-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.241 9.8c.064.602-.204 1.191-.761 1.45h-3.23v-2.5h2.921c.62 0 1.005.425 1.07 1.05m-3.991 5.45v-2.5h3.23c.557.259.825.848.761 1.45c-.065.625-.45 1.05-1.07 1.05z"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h3.671c1.572 0 2.437-1.204 2.562-2.393c.085-.806-.153-1.706-.767-2.357c.614-.651.852-1.551.767-2.357c-.125-1.19-.99-2.393-2.562-2.393z"></svg:path></svg:g>`,
})
export class MynauiLetterBDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterBHexagonSolidIcon],svg[mynaui-letter-b-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.241 9.8c.064.602-.204 1.191-.761 1.45h-3.23v-2.5h2.921c.62 0 1.005.425 1.07 1.05m-3.991 5.45v-2.5h3.23c.557.259.825.848.761 1.45c-.065.625-.45 1.05-1.07 1.05z"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h3.671c1.572 0 2.437-1.204 2.562-2.393c.085-.806-.153-1.706-.767-2.357c.614-.651.852-1.551.767-2.357c-.125-1.19-.99-2.393-2.562-2.393z"></svg:path></svg:g>`,
})
export class MynauiLetterBHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterBOctagonSolidIcon],svg[mynaui-letter-b-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.241 9.8c.064.602-.204 1.191-.761 1.45h-3.23v-2.5h2.921c.62 0 1.005.425 1.07 1.05m-3.991 5.45v-2.5h3.23c.557.259.825.848.761 1.45c-.065.625-.45 1.05-1.07 1.05z"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h3.671c1.572 0 2.437-1.204 2.562-2.393c.085-.806-.153-1.706-.767-2.357c.614-.651.852-1.551.767-2.357c-.125-1.19-.99-2.393-2.562-2.393z"></svg:path></svg:g>`,
})
export class MynauiLetterBOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterBSolidIcon],svg[mynaui-letter-b-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.589c2.006 0 3.106-1.54 3.265-3.047c.105-1.006-.183-2.127-.937-2.953c.754-.826 1.042-1.947.937-2.953C16.694 7.54 15.595 6 13.589 6zm1 5V8h3.589c.384 0 .677.133.885.346c.211.216.35.53.39.91c.077.727-.243 1.431-.903 1.744zm0 5v-3h3.96c.66.313.98 1.017.904 1.743c-.04.382-.179.695-.39.911c-.208.213-.501.346-.885.346z"></svg:path>`,
})
export class MynauiLetterBSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterBSquareSolidIcon],svg[mynaui-letter-b-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.241 9.8c.064.602-.204 1.191-.761 1.45h-3.23v-2.5h2.921c.62 0 1.005.425 1.07 1.05m-3.991 5.45v-2.5h3.23c.557.259.825.848.761 1.45c-.065.625-.45 1.05-1.07 1.05z"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.133 5a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h3.671c1.572 0 2.437-1.204 2.562-2.393c.085-.806-.153-1.706-.767-2.357c.614-.651.852-1.551.767-2.357c-.125-1.19-.99-2.393-2.562-2.393z"></svg:path></svg:g>`,
})
export class MynauiLetterBSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterBWavesSolidIcon],svg[mynaui-letter-b-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.241 9.8c.064.602-.204 1.191-.761 1.45h-3.23v-2.5h2.921c.62 0 1.005.425 1.07 1.05m-3.991 5.45v-2.5h3.23c.557.259.825.848.761 1.45c-.065.625-.45 1.05-1.07 1.05z"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h3.671c1.572 0 2.437-1.204 2.562-2.393c.085-.806-.153-1.706-.767-2.357c.614-.651.852-1.551.767-2.357c-.125-1.19-.99-2.393-2.562-2.393z"></svg:path></svg:g>`,
})
export class MynauiLetterBWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterCCircleSolidIcon],svg[mynaui-letter-c-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.5-2c0-.69.56-1.25 1.25-1.25h2.25a1 1 0 0 1 1 1V10a.75.75 0 0 0 1.5 0v-.25a2.5 2.5 0 0 0-2.5-2.5H11A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2.25a2.5 2.5 0 0 0 2.5-2.5V14a.75.75 0 0 0-1.5 0v.25a1 1 0 0 1-1 1H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class MynauiLetterCCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterCDiamondSolidIcon],svg[mynaui-letter-c-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.75 10c0-.69.56-1.25 1.25-1.25h2.25a1 1 0 0 1 1 1V10a.75.75 0 0 0 1.5 0v-.25a2.5 2.5 0 0 0-2.5-2.5H11A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2.25a2.5 2.5 0 0 0 2.5-2.5V14a.75.75 0 0 0-1.5 0v.25a1 1 0 0 1-1 1H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class MynauiLetterCDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterCHexagonSolidIcon],svg[mynaui-letter-c-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.75 10c0-.69.56-1.25 1.25-1.25h2.25a1 1 0 0 1 1 1V10a.75.75 0 0 0 1.5 0v-.25a2.5 2.5 0 0 0-2.5-2.5H11A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2.25a2.5 2.5 0 0 0 2.5-2.5V14a.75.75 0 0 0-1.5 0v.25a1 1 0 0 1-1 1H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class MynauiLetterCHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterCOctagonSolidIcon],svg[mynaui-letter-c-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9.75 10c0-.69.56-1.25 1.25-1.25h2.25a1 1 0 0 1 1 1V10a.75.75 0 0 0 1.5 0v-.25a2.5 2.5 0 0 0-2.5-2.5H11A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2.25a2.5 2.5 0 0 0 2.5-2.5V14a.75.75 0 0 0-1.5 0v.25a1 1 0 0 1-1 1H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class MynauiLetterCOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterCSolidIcon],svg[mynaui-letter-c-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 6A3.5 3.5 0 0 0 7 9.5v5a3.5 3.5 0 0 0 3.5 3.5h2.813a3.19 3.19 0 0 0 3.187-3.187V14.5a1 1 0 1 0-2 0v.313c0 .655-.532 1.187-1.187 1.187H10.5A1.5 1.5 0 0 1 9 14.5v-5A1.5 1.5 0 0 1 10.5 8h2.813c.655 0 1.187.532 1.187 1.188V9.5a1 1 0 1 0 2 0v-.312A3.19 3.19 0 0 0 13.313 6z"></svg:path>`,
})
export class MynauiLetterCSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterCSquareSolidIcon],svg[mynaui-letter-c-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M9.75 10c0-.69.56-1.25 1.25-1.25h2.25a1 1 0 0 1 1 1V10a.75.75 0 0 0 1.5 0v-.25a2.5 2.5 0 0 0-2.5-2.5H11A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2.25a2.5 2.5 0 0 0 2.5-2.5V14a.75.75 0 0 0-1.5 0v.25a1 1 0 0 1-1 1H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class MynauiLetterCSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterCWavesSolidIcon],svg[mynaui-letter-c-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.75 10c0-.69.56-1.25 1.25-1.25h2.25a1 1 0 0 1 1 1V10a.75.75 0 0 0 1.5 0v-.25a2.5 2.5 0 0 0-2.5-2.5H11A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2.25a2.5 2.5 0 0 0 2.5-2.5V14a.75.75 0 0 0-1.5 0v.25a1 1 0 0 1-1 1H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class MynauiLetterCWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterDCircleSolidIcon],svg[mynaui-letter-d-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15.25h-1.75v-6.5H12a2.75 2.75 0 0 1 2.75 2.75v1A2.75 2.75 0 0 1 12 15.25"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M10 7.25c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h2a4.25 4.25 0 0 0 4.25-4.25v-1A4.25 4.25 0 0 0 12 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterDCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterDDiamondSolidIcon],svg[mynaui-letter-d-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15.25h-1.75v-6.5H12a2.75 2.75 0 0 1 2.75 2.75v1A2.75 2.75 0 0 1 12 15.25"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M10 7.25c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h2a4.25 4.25 0 0 0 4.25-4.25v-1A4.25 4.25 0 0 0 12 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterDDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterDHexagonSolidIcon],svg[mynaui-letter-d-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 15.25v-6.5H12a2.75 2.75 0 0 1 2.75 2.75v1A2.75 2.75 0 0 1 12 15.25z"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM10 7.25c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h2a4.25 4.25 0 0 0 4.25-4.25v-1A4.25 4.25 0 0 0 12 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterDHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterDOctagonSolidIcon],svg[mynaui-letter-d-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 15.25v-6.5H12a2.75 2.75 0 0 1 2.75 2.75v1A2.75 2.75 0 0 1 12 15.25z"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M10 7.25c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h2a4.25 4.25 0 0 0 4.25-4.25v-1A4.25 4.25 0 0 0 12 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterDOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterDSolidIcon],svg[mynaui-letter-d-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.625 6C7.728 6 7 6.728 7 7.625v8.75C7 17.273 7.728 18 8.625 18h2.5a5.375 5.375 0 0 0 5.375-5.375v-1.25A5.375 5.375 0 0 0 11.125 6zM9 16V8h2.125a3.375 3.375 0 0 1 3.375 3.375v1.25A3.375 3.375 0 0 1 11.125 16z"></svg:path>`,
})
export class MynauiLetterDSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterDSquareSolidIcon],svg[mynaui-letter-d-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 15.25v-6.5H12a2.75 2.75 0 0 1 2.75 2.75v1A2.75 2.75 0 0 1 12 15.25z"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.633 5c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h2a4.25 4.25 0 0 0 4.25-4.25v-1A4.25 4.25 0 0 0 12 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterDSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterDWavesSolidIcon],svg[mynaui-letter-d-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 15.25v-6.5H12a2.75 2.75 0 0 1 2.75 2.75v1A2.75 2.75 0 0 1 12 15.25z"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M10 7.25c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h2a4.25 4.25 0 0 0 4.25-4.25v-1A4.25 4.25 0 0 0 12 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterDWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterECircleSolidIcon],svg[mynaui-letter-e-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-4.25v-2.5h3.25a.75.75 0 0 0 0-1.5h-3.25v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterECircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterEDiamondSolidIcon],svg[mynaui-letter-e-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-4.25v-2.5h3.25a.75.75 0 0 0 0-1.5h-3.25v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterEDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterEHexagonSolidIcon],svg[mynaui-letter-e-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-4.25v-2.5h3.25a.75.75 0 0 0 0-1.5h-3.25v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterEHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterEOctagonSolidIcon],svg[mynaui-letter-e-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-4.25v-2.5h3.25a.75.75 0 0 0 0-1.5h-3.25v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterEOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterESolidIcon],svg[mynaui-letter-e-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6.25a1 1 0 1 0 0-2H10v-3h4a1 1 0 1 0 0-2h-4V8h5.25a1 1 0 1 0 0-2z"></svg:path>`,
})
export class MynauiLetterESolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterESquareSolidIcon],svg[mynaui-letter-e-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.133 5a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-4.25v-2.5h3.25a.75.75 0 0 0 0-1.5h-3.25v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterESquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterEWavesSolidIcon],svg[mynaui-letter-e-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.5 7.25a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5h-4.25v-2.5h3.25a.75.75 0 0 0 0-1.5h-3.25v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterEWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterFCircleSolidIcon],svg[mynaui-letter-f-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.5-4.75A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-3.25h3.25a.75.75 0 0 0 0-1.5H10.5v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterFCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterFDiamondSolidIcon],svg[mynaui-letter-f-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.75 7.25A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-3.25h3.25a.75.75 0 0 0 0-1.5H10.5v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterFDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterFHexagonSolidIcon],svg[mynaui-letter-f-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.75 7.25A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-3.25h3.25a.75.75 0 0 0 0-1.5H10.5v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterFHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterFOctagonSolidIcon],svg[mynaui-letter-f-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9.75 7.25A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-3.25h3.25a.75.75 0 0 0 0-1.5H10.5v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterFOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterFSolidIcon],svg[mynaui-letter-f-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V8h5.25a1 1 0 1 0 0-2z"></svg:path>`,
})
export class MynauiLetterFSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterFSquareSolidIcon],svg[mynaui-letter-f-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.383 5A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-3.25h3.25a.75.75 0 0 0 0-1.5H10.5v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterFSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterFWavesSolidIcon],svg[mynaui-letter-f-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.75 7.25A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-3.25h3.25a.75.75 0 0 0 0-1.5H10.5v-2.5h4.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterFWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterGCircleSolidIcon],svg[mynaui-letter-g-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8-2.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75a.75.75 0 0 0 1.5 0A2.25 2.25 0 0 0 13 7.25h-2A2.25 2.25 0 0 0 8.75 9.5v5A2.25 2.25 0 0 0 11 16.75h3c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-1.167a.75.75 0 0 0 0 1.5h.917v2.5H11a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class MynauiLetterGCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterGDiamondSolidIcon],svg[mynaui-letter-g-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m-.54 8.01a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75a.75.75 0 0 0 1.5 0A2.25 2.25 0 0 0 13 7.25h-2A2.25 2.25 0 0 0 8.75 9.5v5A2.25 2.25 0 0 0 11 16.75h3c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-1.167a.75.75 0 0 0 0 1.5h.917v2.5H11a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class MynauiLetterGDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterGHexagonSolidIcon],svg[mynaui-letter-g-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM10.25 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75a.75.75 0 0 0 1.5 0A2.25 2.25 0 0 0 13 7.25h-2A2.25 2.25 0 0 0 8.75 9.5v5A2.25 2.25 0 0 0 11 16.75h3c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-1.167a.75.75 0 0 0 0 1.5h.917v2.5H11a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class MynauiLetterGHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterGOctagonSolidIcon],svg[mynaui-letter-g-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M10.25 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75a.75.75 0 0 0 1.5 0A2.25 2.25 0 0 0 13 7.25h-2A2.25 2.25 0 0 0 8.75 9.5v5A2.25 2.25 0 0 0 11 16.75h3c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-1.167a.75.75 0 0 0 0 1.5h.917v2.5H11a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class MynauiLetterGOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterGSolidIcon],svg[mynaui-letter-g-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.875 6A2.875 2.875 0 0 0 8 8.875v6.25A2.875 2.875 0 0 0 10.875 18h3.75c.898 0 1.625-.727 1.625-1.625v-3.75c0-.898-.727-1.625-1.625-1.625h-1.458a1 1 0 1 0 0 2h1.083v3h-3.375a.875.875 0 0 1-.875-.875v-6.25c0-.483.392-.875.875-.875h2.5c.483 0 .875.392.875.875a1 1 0 1 0 2 0A2.875 2.875 0 0 0 13.375 6z"></svg:path>`,
})
export class MynauiLetterGSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterGSquareSolidIcon],svg[mynaui-letter-g-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.883 7.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75a.75.75 0 0 0 1.5 0A2.25 2.25 0 0 0 13 7.25h-2A2.25 2.25 0 0 0 8.75 9.5v5A2.25 2.25 0 0 0 11 16.75h3c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-1.167a.75.75 0 0 0 0 1.5h.917v2.5H11a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class MynauiLetterGSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterGWavesSolidIcon],svg[mynaui-letter-g-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M10.25 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75a.75.75 0 0 0 1.5 0A2.25 2.25 0 0 0 13 7.25h-2A2.25 2.25 0 0 0 8.75 9.5v5A2.25 2.25 0 0 0 11 16.75h3c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-1.167a.75.75 0 0 0 0 1.5h.917v2.5H11a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class MynauiLetterGWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterHCircleSolidIcon],svg[mynaui-letter-h-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.5V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25h-3.5z"></svg:path>`,
})
export class MynauiLetterHCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterHDiamondSolidIcon],svg[mynaui-letter-h-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M10.25 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.5V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25h-3.5z"></svg:path>`,
})
export class MynauiLetterHDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterHHexagonSolidIcon],svg[mynaui-letter-h-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM10.25 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.5V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25h-3.5z"></svg:path>`,
})
export class MynauiLetterHHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterHOctagonSolidIcon],svg[mynaui-letter-h-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M10.25 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.5V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25h-3.5z"></svg:path>`,
})
export class MynauiLetterHOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterHSolidIcon],svg[mynaui-letter-h-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-4h4.25v4a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0v4H10V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MynauiLetterHSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterHSquareSolidIcon],svg[mynaui-letter-h-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M10.25 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.5V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25h-3.5z"></svg:path>`,
})
export class MynauiLetterHSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterHWavesSolidIcon],svg[mynaui-letter-h-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M10.25 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.5V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25h-3.5z"></svg:path>`,
})
export class MynauiLetterHWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterICircleSolidIcon],svg[mynaui-letter-i-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9.5 7.25a.75.75 0 0 0 0 1.5h1.75v6.5H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75v-6.5h1.75a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterICircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterIDiamondSolidIcon],svg[mynaui-letter-i-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.5 7.25a.75.75 0 0 0 0 1.5h1.75v6.5H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75v-6.5h1.75a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterIDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterIHexagonSolidIcon],svg[mynaui-letter-i-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.5 7.25a.75.75 0 0 0 0 1.5h1.75v6.5H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75v-6.5h1.75a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterIHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterIOctagonSolidIcon],svg[mynaui-letter-i-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9.5 7.25a.75.75 0 0 0 0 1.5h1.75v6.5H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75v-6.5h1.75a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterIOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterISolidIcon],svg[mynaui-letter-i-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a1 1 0 0 0 0 2h2.125v8H9a1 1 0 1 0 0 2h6.25a1 1 0 1 0 0-2h-2.125V8h2.125a1 1 0 1 0 0-2z"></svg:path>`,
})
export class MynauiLetterISolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterISquareSolidIcon],svg[mynaui-letter-i-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.133 5a.75.75 0 0 0 0 1.5h1.75v6.5H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75v-6.5h1.75a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterISquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterIWavesSolidIcon],svg[mynaui-letter-i-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.5 7.25a.75.75 0 0 0 0 1.5h1.75v6.5H9.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-1.75v-6.5h1.75a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterIWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterJCircleSolidIcon],svg[mynaui-letter-j-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M15 8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0a2.75 2.75 0 0 0 2.75 2.75h1A2.75 2.75 0 0 0 15 14z"></svg:path>`,
})
export class MynauiLetterJCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterJDiamondSolidIcon],svg[mynaui-letter-j-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M15 8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0a2.75 2.75 0 0 0 2.75 2.75h1A2.75 2.75 0 0 0 15 14z"></svg:path>`,
})
export class MynauiLetterJDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterJHexagonSolidIcon],svg[mynaui-letter-j-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM15 8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0a2.75 2.75 0 0 0 2.75 2.75h1A2.75 2.75 0 0 0 15 14z"></svg:path>`,
})
export class MynauiLetterJHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterJOctagonSolidIcon],svg[mynaui-letter-j-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M15 8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0a2.75 2.75 0 0 0 2.75 2.75h1A2.75 2.75 0 0 0 15 14z"></svg:path>`,
})
export class MynauiLetterJOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterJSolidIcon],svg[mynaui-letter-j-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 6a1 1 0 0 0-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5H11.5a1.5 1.5 0 0 1-1.5-1.5a1 1 0 1 0-2 0a3.5 3.5 0 0 0 3.5 3.5h1.25a3.5 3.5 0 0 0 3.5-3.5V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MynauiLetterJSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterJSquareSolidIcon],svg[mynaui-letter-j-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M15 8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0a2.75 2.75 0 0 0 2.75 2.75h1A2.75 2.75 0 0 0 15 14z"></svg:path>`,
})
export class MynauiLetterJSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterJWavesSolidIcon],svg[mynaui-letter-j-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M15 8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25a.75.75 0 0 0-1.5 0a2.75 2.75 0 0 0 2.75 2.75h1A2.75 2.75 0 0 0 15 14z"></svg:path>`,
})
export class MynauiLetterJWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterKCircleSolidIcon],svg[mynaui-letter-k-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m12.998-3.44a.75.75 0 0 0-.996-1.12L10.5 10.773V8A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-2.774l3.752 3.335a.75.75 0 0 0 .996-1.122L11.378 12z"></svg:path>`,
})
export class MynauiLetterKCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterKDiamondSolidIcon],svg[mynaui-letter-k-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m4.458 7.07a.75.75 0 0 0-.996-1.12L10.5 10.773V8A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-2.774l3.752 3.335a.75.75 0 0 0 .996-1.122L11.378 12z"></svg:path>`,
})
export class MynauiLetterKDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterKHexagonSolidIcon],svg[mynaui-letter-k-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm4.568 6.456a.75.75 0 0 0-.996-1.122L10.5 10.774V8A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-2.774l3.752 3.335a.75.75 0 0 0 .996-1.122L11.378 12z"></svg:path>`,
})
export class MynauiLetterKHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterKOctagonSolidIcon],svg[mynaui-letter-k-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m7.211 6.153a.75.75 0 0 0-.996-1.122L10.5 10.774V8A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-2.774l3.752 3.335a.75.75 0 0 0 .996-1.122L11.378 12z"></svg:path>`,
})
export class MynauiLetterKOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterKSolidIcon],svg[mynaui-letter-k-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.997 6.336a1 1 0 0 0-1.411-.083L10 10.329V7a1 1 0 0 0-2 0v10a1 1 0 1 0 2 0v-3.329l4.586 4.076a1 1 0 0 0 1.328-1.494L11.13 12l4.784-4.253a1 1 0 0 0 .083-1.411"></svg:path>`,
})
export class MynauiLetterKSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterKSquareSolidIcon],svg[mynaui-letter-k-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m5.881 6.31a.75.75 0 0 0-.996-1.12L10.5 10.773V8A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-2.774l3.752 3.335a.75.75 0 0 0 .996-1.122L11.378 12z"></svg:path>`,
})
export class MynauiLetterKSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterKWavesSolidIcon],svg[mynaui-letter-k-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m4.683 6.486a.75.75 0 0 0-.996-1.122L10.5 10.774V8A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-2.774l3.752 3.335a.75.75 0 0 0 .996-1.122L11.378 12z"></svg:path>`,
})
export class MynauiLetterKWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterLCircleSolidIcon],svg[mynaui-letter-l-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8-4a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75H15a.75.75 0 0 0 0-1.5h-4.75z"></svg:path>`,
})
export class MynauiLetterLCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterLDiamondSolidIcon],svg[mynaui-letter-l-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M10.25 8a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75H15a.75.75 0 0 0 0-1.5h-4.75z"></svg:path>`,
})
export class MynauiLetterLDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterLHexagonSolidIcon],svg[mynaui-letter-l-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM10.25 8a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75H15a.75.75 0 0 0 0-1.5h-4.75z"></svg:path>`,
})
export class MynauiLetterLHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterLOctagonSolidIcon],svg[mynaui-letter-l-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M10.25 8a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75H15a.75.75 0 0 0 0-1.5h-4.75z"></svg:path>`,
})
export class MynauiLetterLOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterLSolidIcon],svg[mynaui-letter-l-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-6V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MynauiLetterLSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterLSquareSolidIcon],svg[mynaui-letter-l-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M10.25 8a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75H15a.75.75 0 0 0 0-1.5h-4.75z"></svg:path>`,
})
export class MynauiLetterLSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterLWavesSolidIcon],svg[mynaui-letter-l-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M10.25 8a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75H15a.75.75 0 0 0 0-1.5h-4.75z"></svg:path>`,
})
export class MynauiLetterLWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterMCircleSolidIcon],svg[mynaui-letter-m-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l1.65 2.2a.75.75 0 0 0 1.2 0l1.65-2.2V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.35-.45l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterMCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterMDiamondSolidIcon],svg[mynaui-letter-m-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l1.65 2.2a.75.75 0 0 0 1.2 0l1.65-2.2V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.35-.45l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterMDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterMHexagonSolidIcon],svg[mynaui-letter-m-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l1.65 2.2a.75.75 0 0 0 1.2 0l1.65-2.2V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.35-.45l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterMHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterMOctagonSolidIcon],svg[mynaui-letter-m-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l1.65 2.2a.75.75 0 0 0 1.2 0l1.65-2.2V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.35-.45l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterMOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterMSolidIcon],svg[mynaui-letter-m-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.8 6.4A1 1 0 0 0 7 7v10a1 1 0 1 0 2 0v-7l1.95 2.6a1 1 0 0 0 1.6 0L14.5 10v7a1 1 0 1 0 2 0V7a1 1 0 0 0-1.8-.6l-2.95 3.933z"></svg:path>`,
})
export class MynauiLetterMSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterMSquareSolidIcon],svg[mynaui-letter-m-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.233 5.3A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l1.65 2.2a.75.75 0 0 0 1.2 0l1.65-2.2V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.35-.45l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterMSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterMWavesSolidIcon],svg[mynaui-letter-m-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l1.65 2.2a.75.75 0 0 0 1.2 0l1.65-2.2V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.35-.45l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterMWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterNCircleSolidIcon],svg[mynaui-letter-n-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l4.65 6.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75z"></svg:path>`,
})
export class MynauiLetterNCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterNDiamondSolidIcon],svg[mynaui-letter-n-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l4.65 6.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75z"></svg:path>`,
})
export class MynauiLetterNDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterNHexagonSolidIcon],svg[mynaui-letter-n-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l4.65 6.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75z"></svg:path>`,
})
export class MynauiLetterNHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterNOctagonSolidIcon],svg[mynaui-letter-n-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l4.65 6.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75z"></svg:path>`,
})
export class MynauiLetterNOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterNSolidIcon],svg[mynaui-letter-n-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.8 6.4A1 1 0 0 0 7 7v10a1 1 0 1 0 2 0v-7l5.7 7.6a1 1 0 0 0 1.8-.6V7a1 1 0 1 0-2 0v7z"></svg:path>`,
})
export class MynauiLetterNSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterNSquareSolidIcon],svg[mynaui-letter-n-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.233 5.3A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l4.65 6.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75z"></svg:path>`,
})
export class MynauiLetterNSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterNWavesSolidIcon],svg[mynaui-letter-n-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.6 7.55A.75.75 0 0 0 8.25 8v8a.75.75 0 0 0 1.5 0v-5.75l4.65 6.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75z"></svg:path>`,
})
export class MynauiLetterNWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterOCircleSolidIcon],svg[mynaui-letter-o-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M11 7.25A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14v-4A2.75 2.75 0 0 0 13 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterOCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterODiamondSolidIcon],svg[mynaui-letter-o-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M11 7.25A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14v-4A2.75 2.75 0 0 0 13 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterODiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterOHexagonSolidIcon],svg[mynaui-letter-o-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM11 7.25A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14v-4A2.75 2.75 0 0 0 13 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterOHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterOOctagonSolidIcon],svg[mynaui-letter-o-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M11 7.25A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14v-4A2.75 2.75 0 0 0 13 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterOOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterOSolidIcon],svg[mynaui-letter-o-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 6A3.5 3.5 0 0 0 7 9.5v5a3.5 3.5 0 0 0 3.5 3.5H13a3.5 3.5 0 0 0 3.5-3.5v-5A3.5 3.5 0 0 0 13 6zM9 9.5A1.5 1.5 0 0 1 10.5 8H13a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 13 16h-2.5A1.5 1.5 0 0 1 9 14.5z"></svg:path>`,
})
export class MynauiLetterOSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterOSquareSolidIcon],svg[mynaui-letter-o-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m1.633 5A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14v-4A2.75 2.75 0 0 0 13 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterOSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterOWavesSolidIcon],svg[mynaui-letter-o-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M11 7.25A2.75 2.75 0 0 0 8.25 10v4A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14v-4A2.75 2.75 0 0 0 13 7.25z"></svg:path></svg:g>`,
})
export class MynauiLetterOWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterPCircleSolidIcon],svg[mynaui-letter-p-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8-4.75C9.56 7.25 9 7.81 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h2.75a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterPCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterPDiamondSolidIcon],svg[mynaui-letter-p-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m-.54 5.76A1.25 1.25 0 0 0 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h2.75a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterPDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterPHexagonSolidIcon],svg[mynaui-letter-p-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm-.43 5.145C9.56 7.25 9 7.81 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h2.75a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterPHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterPOctagonSolidIcon],svg[mynaui-letter-p-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M10.25 7.25C9.56 7.25 9 7.81 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h2.75a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterPOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterPSolidIcon],svg[mynaui-letter-p-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.625 6C8.728 6 8 6.728 8 7.625V17a1 1 0 1 0 2 0v-4h3.375a2.875 2.875 0 0 0 2.875-2.875v-1.25A2.875 2.875 0 0 0 13.375 6zM10 11V8h3.375c.483 0 .875.392.875.875v1.25a.875.875 0 0 1-.875.875z"></svg:path>`,
})
export class MynauiLetterPSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterPSquareSolidIcon],svg[mynaui-letter-p-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.883 5C9.56 7.25 9 7.81 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h2.75a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterPSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterPWavesSolidIcon],svg[mynaui-letter-p-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M10.25 7.25C9.56 7.25 9 7.81 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h2.75a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterPWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterQCircleSolidIcon],svg[mynaui-letter-q-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l.72.72H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m13.5-2v5.69l.28.28a.75.75 0 1 1-1.06 1.06l-.28-.28H11A2.75 2.75 0 0 1 8.25 14v-4A2.75 2.75 0 0 1 11 7.25h2A2.75 2.75 0 0 1 15.75 10"></svg:path></svg:g>`,
})
export class MynauiLetterQCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterQDiamondSolidIcon],svg[mynaui-letter-q-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l.72.72H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686M15.75 10v5.69l.28.28a.75.75 0 1 1-1.06 1.06l-.28-.28H11A2.75 2.75 0 0 1 8.25 14v-4A2.75 2.75 0 0 1 11 7.25h2A2.75 2.75 0 0 1 15.75 10"></svg:path></svg:g>`,
})
export class MynauiLetterQDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterQHexagonSolidIcon],svg[mynaui-letter-q-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l.72.72H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0M15.75 10v5.69l.28.28a.75.75 0 1 1-1.06 1.06l-.28-.28H11A2.75 2.75 0 0 1 8.25 14v-4A2.75 2.75 0 0 1 11 7.25h2A2.75 2.75 0 0 1 15.75 10"></svg:path></svg:g>`,
})
export class MynauiLetterQHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterQOctagonSolidIcon],svg[mynaui-letter-q-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l.72.72H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="M8.037 2.408c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158H8.937a2.3 2.3 0 0 0-.9.158M15.75 10v5.69l.28.28a.75.75 0 1 1-1.06 1.06l-.28-.28H11A2.75 2.75 0 0 1 8.25 14v-4A2.75 2.75 0 0 1 11 7.25h2A2.75 2.75 0 0 1 15.75 10"></svg:path></svg:g>`,
})
export class MynauiLetterQOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterQSolidIcon],svg[mynaui-letter-q-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.462 6A3.466 3.466 0 0 0 7 9.47v4.942a3.466 3.466 0 0 0 3.461 3.47h4.508l.323.324a1 1 0 0 0 1.416-1.412l-.323-.325V9.471A3.466 3.466 0 0 0 12.923 6zM9 9.47C9 8.656 9.658 8 10.461 8h2.462c.804 0 1.462.655 1.462 1.47v4.992l-.753-.756a1 1 0 1 0-1.417 1.412l.762.764H10.46A1.466 1.466 0 0 1 9 14.412z"></svg:path>`,
})
export class MynauiLetterQSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterQSquareSolidIcon],svg[mynaui-letter-q-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l.72.72H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM15.75 10v5.69l.28.28a.75.75 0 1 1-1.06 1.06l-.28-.28H11A2.75 2.75 0 0 1 8.25 14v-4A2.75 2.75 0 0 1 11 7.25h2A2.75 2.75 0 0 1 15.75 10"></svg:path></svg:g>`,
})
export class MynauiLetterQSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterQWavesSolidIcon],svg[mynaui-letter-q-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.75 10c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l.72.72H11c-.69 0-1.25-.56-1.25-1.25z"></svg:path><svg:path d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M15.75 10v5.69l.28.28a.75.75 0 1 1-1.06 1.06l-.28-.28H11A2.75 2.75 0 0 1 8.25 14v-4A2.75 2.75 0 0 1 11 7.25h2A2.75 2.75 0 0 1 15.75 10"></svg:path></svg:g>`,
})
export class MynauiLetterQWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterRCircleSolidIcon],svg[mynaui-letter-r-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8-4.75C9.56 7.25 9 7.81 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h.625l2.775 3.7a.75.75 0 1 0 1.2-.9l-2.1-2.8h.25a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterRCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterRDiamondSolidIcon],svg[mynaui-letter-r-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m-.54 5.76A1.25 1.25 0 0 0 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h.625l2.775 3.7a.75.75 0 1 0 1.2-.9l-2.1-2.8h.25a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterRDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterRHexagonSolidIcon],svg[mynaui-letter-r-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm-.43 5.145C9.56 7.25 9 7.81 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h.625l2.775 3.7a.75.75 0 1 0 1.2-.9l-2.1-2.8h.25a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterRHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterROctagonSolidIcon],svg[mynaui-letter-r-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M10.25 7.25C9.56 7.25 9 7.81 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h.625l2.775 3.7a.75.75 0 1 0 1.2-.9l-2.1-2.8h.25a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterROctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterRSolidIcon],svg[mynaui-letter-r-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.625 6C8.728 6 8 6.728 8 7.625V17a1 1 0 1 0 2 0v-4h.688l3.45 4.6a1 1 0 0 0 1.6-1.2l-2.55-3.4h.187a2.875 2.875 0 0 0 2.875-2.875v-1.25A2.875 2.875 0 0 0 13.375 6zM10 11V8h3.375c.483 0 .875.392.875.875v1.25a.875.875 0 0 1-.875.875z"></svg:path>`,
})
export class MynauiLetterRSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterRSquareSolidIcon],svg[mynaui-letter-r-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.883 5C9.56 7.25 9 7.81 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h.625l2.775 3.7a.75.75 0 1 0 1.2-.9l-2.1-2.8h.25a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterRSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterRWavesSolidIcon],svg[mynaui-letter-r-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.25 11.25H10.5v-2.5h2.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M10.25 7.25C9.56 7.25 9 7.81 9 8.5V16a.75.75 0 0 0 1.5 0v-3.25h.625l2.775 3.7a.75.75 0 1 0 1.2-.9l-2.1-2.8h.25a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25z"></svg:path></svg:g>`,
})
export class MynauiLetterRWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterSCircleSolidIcon],svg[mynaui-letter-s-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8.25-4.75A1.75 1.75 0 0 0 8.75 9v.984c0 .92.56 1.748 1.414 2.09l3.114 1.245a.75.75 0 0 1 .472.696V15a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25v-.25a.75.75 0 0 0-1.5 0V15c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 15.25 15v-.985c0-.92-.56-1.747-1.414-2.088l-3.114-1.246a.75.75 0 0 1-.472-.697V9a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v.25a.75.75 0 0 0 1.5 0V9a1.75 1.75 0 0 0-1.75-1.75z"></svg:path>`,
})
export class MynauiLetterSCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterSDiamondSolidIcon],svg[mynaui-letter-s-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m-.29 5.76A1.75 1.75 0 0 0 8.75 9v.984c0 .92.56 1.748 1.414 2.09l3.114 1.245a.75.75 0 0 1 .472.696V15a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25v-.25a.75.75 0 0 0-1.5 0V15c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 15.25 15v-.985c0-.92-.56-1.747-1.414-2.088l-3.114-1.246a.75.75 0 0 1-.472-.697V9a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v.25a.75.75 0 0 0 1.5 0V9a1.75 1.75 0 0 0-1.75-1.75z"></svg:path>`,
})
export class MynauiLetterSDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterSHexagonSolidIcon],svg[mynaui-letter-s-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM10.5 7.25A1.75 1.75 0 0 0 8.75 9v.984c0 .92.56 1.748 1.414 2.09l3.114 1.245a.75.75 0 0 1 .472.696V15a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25v-.25a.75.75 0 0 0-1.5 0V15c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 15.25 15v-.985c0-.92-.56-1.747-1.414-2.088l-3.114-1.246a.75.75 0 0 1-.472-.697V9a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v.25a.75.75 0 0 0 1.5 0V9a1.75 1.75 0 0 0-1.75-1.75z"></svg:path>`,
})
export class MynauiLetterSHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterSOctagonSolidIcon],svg[mynaui-letter-s-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M10.5 7.25A1.75 1.75 0 0 0 8.75 9v.984c0 .92.56 1.748 1.414 2.09l3.114 1.245a.75.75 0 0 1 .472.696V15a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25v-.25a.75.75 0 0 0-1.5 0V15c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 15.25 15v-.985c0-.92-.56-1.747-1.414-2.088l-3.114-1.246a.75.75 0 0 1-.472-.697V9a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v.25a.75.75 0 0 0 1.5 0V9a1.75 1.75 0 0 0-1.75-1.75z"></svg:path>`,
})
export class MynauiLetterSOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterSSolidIcon],svg[mynaui-letter-s-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 6A2.25 2.25 0 0 0 8 8.25v1.23c0 1.176.716 2.233 1.807 2.67l3.893 1.557c.332.133.55.455.55.812v1.231A.25.25 0 0 1 14 16h-3.75a.25.25 0 0 1-.25-.25v-.312a1 1 0 1 0-2 0v.312A2.25 2.25 0 0 0 10.25 18H14a2.25 2.25 0 0 0 2.25-2.25v-1.23a2.875 2.875 0 0 0-1.807-2.67l-3.893-1.557a.875.875 0 0 1-.55-.812V8.25a.25.25 0 0 1 .25-.25H14a.25.25 0 0 1 .25.25v.313a1 1 0 1 0 2 0V8.25A2.25 2.25 0 0 0 14 6z"></svg:path>`,
})
export class MynauiLetterSSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterSSquareSolidIcon],svg[mynaui-letter-s-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m1.133 5A1.75 1.75 0 0 0 8.75 9v.984c0 .92.56 1.748 1.414 2.09l3.114 1.245a.75.75 0 0 1 .472.696V15a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25v-.25a.75.75 0 0 0-1.5 0V15c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 15.25 15v-.985c0-.92-.56-1.747-1.414-2.088l-3.114-1.246a.75.75 0 0 1-.472-.697V9a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v.25a.75.75 0 0 0 1.5 0V9a1.75 1.75 0 0 0-1.75-1.75z"></svg:path>`,
})
export class MynauiLetterSSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterSWavesSolidIcon],svg[mynaui-letter-s-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M10.5 7.25A1.75 1.75 0 0 0 8.75 9v.984c0 .92.56 1.748 1.414 2.09l3.114 1.245a.75.75 0 0 1 .472.696V15a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25v-.25a.75.75 0 0 0-1.5 0V15c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 15.25 15v-.985c0-.92-.56-1.747-1.414-2.088l-3.114-1.246a.75.75 0 0 1-.472-.697V9a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v.25a.75.75 0 0 0 1.5 0V9a1.75 1.75 0 0 0-1.75-1.75z"></svg:path>`,
})
export class MynauiLetterSWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterTCircleSolidIcon],svg[mynaui-letter-t-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9 7.5A.75.75 0 0 0 9 9h2.25v7.25a.75.75 0 0 0 1.5 0V9H15a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterTCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterTDiamondSolidIcon],svg[mynaui-letter-t-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9 7.5A.75.75 0 0 0 9 9h2.25v7.25a.75.75 0 0 0 1.5 0V9H15a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterTDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterTHexagonSolidIcon],svg[mynaui-letter-t-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9 7.5A.75.75 0 0 0 9 9h2.25v7.25a.75.75 0 0 0 1.5 0V9H15a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterTHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterTOctagonSolidIcon],svg[mynaui-letter-t-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9 7.5A.75.75 0 0 0 9 9h2.25v7.25a.75.75 0 0 0 1.5 0V9H15a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterTOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterTSolidIcon],svg[mynaui-letter-t-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a1 1 0 0 0 0 2h2.75v9a1 1 0 1 0 2 0V8h2.75a1 1 0 1 0 0-2z"></svg:path>`,
})
export class MynauiLetterTSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterTSquareSolidIcon],svg[mynaui-letter-t-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M9 7.5A.75.75 0 0 0 9 9h2.25v7.25a.75.75 0 0 0 1.5 0V9H15a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterTSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterTWavesSolidIcon],svg[mynaui-letter-t-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9 7.5A.75.75 0 0 0 9 9h2.25v7.25a.75.75 0 0 0 1.5 0V9H15a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLetterTWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterUCircleSolidIcon],svg[mynaui-letter-u-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.5-4a.75.75 0 0 0-1.5 0v6A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14V8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class MynauiLetterUCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterUDiamondSolidIcon],svg[mynaui-letter-u-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.75 8a.75.75 0 0 0-1.5 0v6A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14V8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class MynauiLetterUDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterUHexagonSolidIcon],svg[mynaui-letter-u-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.75 8a.75.75 0 0 0-1.5 0v6A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14V8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class MynauiLetterUHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterUOctagonSolidIcon],svg[mynaui-letter-u-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9.75 8a.75.75 0 0 0-1.5 0v6A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14V8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class MynauiLetterUOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterUSolidIcon],svg[mynaui-letter-u-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a1 1 0 0 0-1 1v7.5a3.5 3.5 0 0 0 3.5 3.5H13a3.5 3.5 0 0 0 3.5-3.5V7a1 1 0 1 0-2 0v7.5A1.5 1.5 0 0 1 13 16h-2.5A1.5 1.5 0 0 1 9 14.5V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MynauiLetterUSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterUSquareSolidIcon],svg[mynaui-letter-u-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M9.75 8a.75.75 0 0 0-1.5 0v6A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14V8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class MynauiLetterUSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterUWavesSolidIcon],svg[mynaui-letter-u-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.75 8a.75.75 0 0 0-1.5 0v6A2.75 2.75 0 0 0 11 16.75h2A2.75 2.75 0 0 0 15.75 14V8a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class MynauiLetterUWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterVCircleSolidIcon],svg[mynaui-letter-v-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.452-4.013a.75.75 0 0 0-1.404.526l3 8a.75.75 0 0 0 1.404 0l3-8a.75.75 0 0 0-1.404-.526L12 14.114z"></svg:path>`,
})
export class MynauiLetterVCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterVDiamondSolidIcon],svg[mynaui-letter-v-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.702 7.988a.75.75 0 0 0-1.404.526l3 8a.75.75 0 0 0 1.404 0l3-8a.75.75 0 0 0-1.404-.526L12 14.114z"></svg:path>`,
})
export class MynauiLetterVDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterVHexagonSolidIcon],svg[mynaui-letter-v-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm-.978 5.882a.75.75 0 0 0-1.404.526l3 8a.75.75 0 0 0 1.404 0l3-8a.75.75 0 0 0-1.404-.526L12 14.114z"></svg:path>`,
})
export class MynauiLetterVHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterVOctagonSolidIcon],svg[mynaui-letter-v-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m1.665 5.579a.75.75 0 0 0-1.404.526l3 8a.75.75 0 0 0 1.404 0l3-8a.75.75 0 0 0-1.404-.526L12 14.114z"></svg:path>`,
})
export class MynauiLetterVOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterVSolidIcon],svg[mynaui-letter-v-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.936 6.649a1 1 0 0 0-1.872.702l3.75 10a1 1 0 0 0 1.872 0l3.75-10a1 1 0 0 0-1.872-.702l-2.814 7.503z"></svg:path>`,
})
export class MynauiLetterVSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterVSquareSolidIcon],svg[mynaui-letter-v-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.335 5.737a.75.75 0 0 0-1.404.526l3 8a.75.75 0 0 0 1.404 0l3-8a.75.75 0 0 0-1.404-.526L12 14.114z"></svg:path>`,
})
export class MynauiLetterVSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterVWavesSolidIcon],svg[mynaui-letter-v-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m-.863 5.912a.75.75 0 0 0-1.404.526l3 8a.75.75 0 0 0 1.404 0l3-8a.75.75 0 0 0-1.404-.526L12 14.114z"></svg:path>`,
})
export class MynauiLetterVWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterWCircleSolidIcon],svg[mynaui-letter-w-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.5-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.35.45l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75l-1.65-2.2a.75.75 0 0 0-1.2 0l-1.65 2.2z"></svg:path>`,
})
export class MynauiLetterWCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterWDiamondSolidIcon],svg[mynaui-letter-w-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.35.45l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75l-1.65-2.2a.75.75 0 0 0-1.2 0l-1.65 2.2z"></svg:path>`,
})
export class MynauiLetterWDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterWHexagonSolidIcon],svg[mynaui-letter-w-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.35.45l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75l-1.65-2.2a.75.75 0 0 0-1.2 0l-1.65 2.2z"></svg:path>`,
})
export class MynauiLetterWHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterWOctagonSolidIcon],svg[mynaui-letter-w-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.35.45l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75l-1.65-2.2a.75.75 0 0 0-1.2 0l-1.65 2.2z"></svg:path>`,
})
export class MynauiLetterWOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterWSolidIcon],svg[mynaui-letter-w-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1.8.6l2.95-3.933L14.7 17.6a1 1 0 0 0 1.8-.6V7a1 1 0 1 0-2 0v7l-1.95-2.6a1 1 0 0 0-1.6 0L9 14V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MynauiLetterWSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterWSquareSolidIcon],svg[mynaui-letter-w-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M9.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.35.45l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75l-1.65-2.2a.75.75 0 0 0-1.2 0l-1.65 2.2z"></svg:path>`,
})
export class MynauiLetterWSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterWWavesSolidIcon],svg[mynaui-letter-w-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.35.45l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.35-.45V8a.75.75 0 0 0-1.5 0v5.75l-1.65-2.2a.75.75 0 0 0-1.2 0l-1.65 2.2z"></svg:path>`,
})
export class MynauiLetterWWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterXCircleSolidIcon],svg[mynaui-letter-x-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9.6 7.55a.75.75 0 1 0-1.2.9L11.062 12L8.4 15.55a.75.75 0 0 0 1.2.9l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.2-.9L12.938 12L15.6 8.45a.75.75 0 1 0-1.2-.9l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterXCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterXDiamondSolidIcon],svg[mynaui-letter-x-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.6 7.55a.75.75 0 1 0-1.2.9L11.062 12L8.4 15.55a.75.75 0 0 0 1.2.9l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.2-.9L12.938 12L15.6 8.45a.75.75 0 1 0-1.2-.9l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterXDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterXHexagonSolidIcon],svg[mynaui-letter-x-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.6 7.55a.75.75 0 1 0-1.2.9L11.062 12L8.4 15.55a.75.75 0 0 0 1.2.9l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.2-.9L12.938 12L15.6 8.45a.75.75 0 1 0-1.2-.9l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterXHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterXOctagonSolidIcon],svg[mynaui-letter-x-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9.6 7.55a.75.75 0 1 0-1.2.9L11.062 12L8.4 15.55a.75.75 0 0 0 1.2.9l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.2-.9L12.938 12L15.6 8.45a.75.75 0 1 0-1.2-.9l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterXOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterXSolidIcon],svg[mynaui-letter-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.8 6.4a1 1 0 1 0-1.6 1.2l3.3 4.4l-3.3 4.4a1 1 0 0 0 1.6 1.2l2.95-3.933L14.7 17.6a1 1 0 1 0 1.6-1.2L13 12l3.3-4.4a1 1 0 0 0-1.6-1.2l-2.95 3.933z"></svg:path>`,
})
export class MynauiLetterXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterXSquareSolidIcon],svg[mynaui-letter-x-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.233 5.3a.75.75 0 1 0-1.2.9L11.062 12L8.4 15.55a.75.75 0 0 0 1.2.9l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.2-.9L12.938 12L15.6 8.45a.75.75 0 1 0-1.2-.9l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterXSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterXWavesSolidIcon],svg[mynaui-letter-x-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.6 7.55a.75.75 0 1 0-1.2.9L11.062 12L8.4 15.55a.75.75 0 0 0 1.2.9l2.4-3.2l2.4 3.2a.75.75 0 0 0 1.2-.9L12.938 12L15.6 8.45a.75.75 0 1 0-1.2-.9l-2.4 3.2z"></svg:path>`,
})
export class MynauiLetterXWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterYCircleSolidIcon],svg[mynaui-letter-y-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9.6 7.8a.75.75 0 1 0-1.2.9l2.85 3.8v3.75a.75.75 0 0 0 1.5 0V12.5l2.85-3.8a.75.75 0 1 0-1.2-.9L12 11z"></svg:path>`,
})
export class MynauiLetterYCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterYDiamondSolidIcon],svg[mynaui-letter-y-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.6 7.8a.75.75 0 1 0-1.2.9l2.85 3.8v3.75a.75.75 0 0 0 1.5 0V12.5l2.85-3.8a.75.75 0 1 0-1.2-.9L12 11z"></svg:path>`,
})
export class MynauiLetterYDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterYHexagonSolidIcon],svg[mynaui-letter-y-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9.6 7.8a.75.75 0 1 0-1.2.9l2.85 3.8v3.75a.75.75 0 0 0 1.5 0V12.5l2.85-3.8a.75.75 0 1 0-1.2-.9L12 11z"></svg:path>`,
})
export class MynauiLetterYHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterYOctagonSolidIcon],svg[mynaui-letter-y-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9.6 7.8a.75.75 0 1 0-1.2.9l2.85 3.8v3.75a.75.75 0 0 0 1.5 0V12.5l2.85-3.8a.75.75 0 1 0-1.2-.9L12 11z"></svg:path>`,
})
export class MynauiLetterYOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterYSolidIcon],svg[mynaui-letter-y-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.8 6.4a1 1 0 1 0-1.6 1.2l3.55 4.733V17a1 1 0 1 0 2 0v-4.667L16.3 7.6a1 1 0 0 0-1.6-1.2l-2.95 3.933z"></svg:path>`,
})
export class MynauiLetterYSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterYSquareSolidIcon],svg[mynaui-letter-y-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M9.6 7.8a.75.75 0 1 0-1.2.9l2.85 3.8v3.75a.75.75 0 0 0 1.5 0V12.5l2.85-3.8a.75.75 0 1 0-1.2-.9L12 11z"></svg:path>`,
})
export class MynauiLetterYSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterYWavesSolidIcon],svg[mynaui-letter-y-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9.6 7.8a.75.75 0 1 0-1.2.9l2.85 3.8v3.75a.75.75 0 0 0 1.5 0V12.5l2.85-3.8a.75.75 0 1 0-1.2-.9L12 11z"></svg:path>`,
})
export class MynauiLetterYWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterZCircleSolidIcon],svg[mynaui-letter-z-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M9 7.25a.75.75 0 0 0 0 1.5h4.5l-5.1 6.8a.75.75 0 0 0 .6 1.2h6a.75.75 0 0 0 0-1.5h-4.5l5.1-6.8a.75.75 0 0 0-.6-1.2z"></svg:path>`,
})
export class MynauiLetterZCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterZDiamondSolidIcon],svg[mynaui-letter-z-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9 7.25a.75.75 0 0 0 0 1.5h4.5l-5.1 6.8a.75.75 0 0 0 .6 1.2h6a.75.75 0 0 0 0-1.5h-4.5l5.1-6.8a.75.75 0 0 0-.6-1.2z"></svg:path>`,
})
export class MynauiLetterZDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterZHexagonSolidIcon],svg[mynaui-letter-z-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM9 7.25a.75.75 0 0 0 0 1.5h4.5l-5.1 6.8a.75.75 0 0 0 .6 1.2h6a.75.75 0 0 0 0-1.5h-4.5l5.1-6.8a.75.75 0 0 0-.6-1.2z"></svg:path>`,
})
export class MynauiLetterZHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterZOctagonSolidIcon],svg[mynaui-letter-z-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M9 7.25a.75.75 0 0 0 0 1.5h4.5l-5.1 6.8a.75.75 0 0 0 .6 1.2h6a.75.75 0 0 0 0-1.5h-4.5l5.1-6.8a.75.75 0 0 0-.6-1.2z"></svg:path>`,
})
export class MynauiLetterZOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterZSolidIcon],svg[mynaui-letter-z-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a1 1 0 1 0 0 2h5.5l-6.3 8.4A1 1 0 0 0 8 18h7.5a1 1 0 1 0 0-2H10l6.3-8.4a1 1 0 0 0-.8-1.6z"></svg:path>`,
})
export class MynauiLetterZSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterZSquareSolidIcon],svg[mynaui-letter-z-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M9 7.25a.75.75 0 0 0 0 1.5h4.5l-5.1 6.8a.75.75 0 0 0 .6 1.2h6a.75.75 0 0 0 0-1.5h-4.5l5.1-6.8a.75.75 0 0 0-.6-1.2z"></svg:path>`,
})
export class MynauiLetterZSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterZWavesSolidIcon],svg[mynaui-letter-z-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M9 7.25a.75.75 0 0 0 0 1.5h4.5l-5.1 6.8a.75.75 0 0 0 .6 1.2h6a.75.75 0 0 0 0-1.5h-4.5l5.1-6.8a.75.75 0 0 0-.6-1.2z"></svg:path>`,
})
export class MynauiLetterZWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLightningSlashSolidIcon],svg[mynaui-lightning-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.493 3.659a1.25 1.25 0 0 0-.711-1.296a1.195 1.195 0 0 0-1.46.36L3.518 12.736a1.28 1.28 0 0 0-.16 1.302c.172.393.57.741 1.116.741H8.16l-5.69 5.69a.75.75 0 1 0 1.06 1.061l6.752-6.751h.875l-.65 5.562a1.25 1.25 0 0 0 .711 1.296a1.195 1.195 0 0 0 1.46-.36l7.803-10.013a1.28 1.28 0 0 0 .16-1.302a1.22 1.22 0 0 0-1.116-.741H15.84l5.69-5.69a.75.75 0 0 0-1.06-1.061l-6.752 6.75h-.875z"></svg:path>`,
})
export class MynauiLightningSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLightningSolidIcon],svg[mynaui-lightning-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.493 3.659a1.25 1.25 0 0 0-.711-1.296a1.195 1.195 0 0 0-1.46.36L3.518 12.736a1.28 1.28 0 0 0-.16 1.302c.172.393.57.741 1.116.741h6.682l-.65 5.562a1.25 1.25 0 0 0 .711 1.296a1.195 1.195 0 0 0 1.46-.36l7.803-10.013a1.28 1.28 0 0 0 .16-1.302a1.22 1.22 0 0 0-1.116-.741h-6.682z"></svg:path>`,
})
export class MynauiLightningSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLikeSolidIcon],svg[mynaui-like-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.148 9.175c-.55.294-.898.865-.898 1.493v9.385c0 .95.78 1.697 1.714 1.697h12.521c.579 0 1.024-.404 1.304-.725c.317-.362.618-.847.894-1.383c.557-1.08 1.08-2.494 1.459-3.893c.376-1.392.628-2.832.607-3.956c-.01-.552-.087-1.11-.312-1.556c-.247-.493-.703-.882-1.364-.882h-5.25c.216-.96.51-2.497.404-3.868c-.059-.758-.246-1.561-.723-2.189c-.509-.668-1.277-1.048-2.282-1.048c-.582 0-1.126.31-1.415.822m0 0l-1.28 2.266c-.512.906-1.3 1.58-2.258 2.176c-.638.397-1.294.727-1.973 1.07a50 50 0 0 0-1.148.591"></svg:path>`,
})
export class MynauiLikeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLineChartCircleSolidIcon],svg[mynaui-line-chart-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m14.28-1.47a.75.75 0 1 0-1.06-1.06l-2.97 2.97l-1.47-1.47a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.97-1.97l1.47 1.47a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class MynauiLineChartCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLineChartDiamondSolidIcon],svg[mynaui-line-chart-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m5.74 9.04a.75.75 0 1 0-1.06-1.06l-2.97 2.97l-1.47-1.47a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.97-1.97l1.47 1.47a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class MynauiLineChartDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLineChartHexagonSolidIcon],svg[mynaui-line-chart-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm5.85 8.425a.75.75 0 1 0-1.06-1.06l-2.97 2.97l-1.47-1.47a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.97-1.97l1.47 1.47a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class MynauiLineChartHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLineChartOctagonSolidIcon],svg[mynaui-line-chart-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m8.493 8.122a.75.75 0 1 0-1.06-1.06l-2.97 2.97l-1.47-1.47a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.97-1.97l1.47 1.47a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class MynauiLineChartOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLineChartSquareSolidIcon],svg[mynaui-line-chart-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m7.163 8.28a.75.75 0 1 0-1.06-1.06l-2.97 2.97l-1.47-1.47a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.97-1.97l1.47 1.47a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class MynauiLineChartSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLineChartWavesSolidIcon],svg[mynaui-line-chart-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m5.965 8.455a.75.75 0 1 0-1.06-1.06l-2.97 2.97l-1.47-1.47a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.97-1.97l1.47 1.47a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class MynauiLineChartWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLinkOneSolidIcon],svg[mynaui-link-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.468 4.532c-1.03-1.031-2.652-1.033-3.62-.062l-4.382 4.384c-.97.97-.97 2.594.063 3.626a.75.75 0 0 1-1.061 1.06c-1.59-1.59-1.646-4.163-.063-5.746l4.381-4.385c1.582-1.583 4.153-1.528 5.743.063s1.645 4.164.063 5.747l-3.803 3.806a.75.75 0 1 1-1.062-1.06l3.804-3.807c.97-.97.968-2.594-.063-3.626m-6.935 5.864a.75.75 0 0 1 1.06 0c1.592 1.591 1.646 4.164.064 5.747l-.027.026l-.035.037l-4.38 4.385c-1.583 1.583-4.154 1.528-5.744-.063s-1.644-4.164-.063-5.747l3.804-3.806a.75.75 0 0 1 1.06 1.06L4.47 15.842c-.97.97-.968 2.594.063 3.626c1.03 1.031 2.652 1.033 3.621.062l4.38-4.384l.028-.026l.035-.037c.97-.97.97-2.594-.063-3.626a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiLinkOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLinkSolidIcon],svg[mynaui-link-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.372 3.58c1.708-1.709 4.465-1.799 6.156-.108s1.601 4.448-.107 6.156l-3.902 3.902a.75.75 0 1 1-1.06-1.06l3.901-3.902c1.165-1.165 1.171-2.971.107-4.035c-1.063-1.064-2.87-1.058-4.035.107L11.53 8.542a.75.75 0 0 1-1.06-1.06zm1.158 4.89a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0"></svg:path><svg:path d="M8.555 11.531a.75.75 0 0 0-1.06-1.062L3.604 14.35c-1.703 1.698-1.862 4.296-.12 6.118c1.783 1.863 4.477 1.578 6.154-.094l3.892-3.881a.75.75 0 1 0-1.06-1.062L8.58 19.31c-1.189 1.186-2.908 1.272-4.01.12a3 3 0 0 1-.191-.217c-.939-1.172-.81-2.71.285-3.802z"></svg:path></svg:g>`,
})
export class MynauiLinkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLinkTwoSolidIcon],svg[mynaui-link-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.997 7.75h3.401c2.384 0 4.352 1.883 4.352 4.25s-1.968 4.25-4.352 4.25h-3.4a.75.75 0 1 1 0-1.5h3.4c1.595 0 2.851-1.251 2.851-2.75s-1.256-2.75-2.85-2.75h-3.402a.75.75 0 1 1 0-1.5M7.002 12a.75.75 0 0 1 .75-.75h8.489a.75.75 0 1 1 0 1.5H7.752a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M10.003 7.75H6.602C4.218 7.75 2.25 9.633 2.25 12s1.968 4.25 4.352 4.25h3.4a.75.75 0 1 0 0-1.5h-3.4c-1.595 0-2.851-1.251-2.851-2.75S5.007 9.25 6.6 9.25h3.402a.75.75 0 1 0 0-1.5M16.998 12a.75.75 0 0 0-.75-.75H7.759a.75.75 0 1 0 0 1.5h8.489a.75.75 0 0 0 .75-.75"></svg:path></svg:g>`,
})
export class MynauiLinkTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiListCheckSolidIcon],svg[mynaui-list-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.082 4.973a.75.75 0 0 0-1.164-.946L4.541 6.953l-1.118-.764a.75.75 0 1 0-.846 1.238L4.264 8.58a.75.75 0 0 0 1.006-.146zm0 5.769a.75.75 0 0 0-1.164-.946l-2.377 2.926l-1.118-.764a.75.75 0 0 0-.846 1.238l1.687 1.154a.75.75 0 0 0 1.006-.146zm0 5.769a.75.75 0 0 0-1.164-.945L4.541 18.49l-1.118-.764a.75.75 0 1 0-.846 1.238l1.687 1.154a.75.75 0 0 0 1.006-.146zM11 5.75a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiListCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiListNumberSolidIcon],svg[mynaui-list-number-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zM6.25 4.5a.75.75 0 0 0-1.068-.68l-2 .938a.75.75 0 0 0 .636 1.359l.932-.437v4.445a.75.75 0 0 0 1.5 0zm-2 10.781c0-.317.29-.656.75-.656h.04c.439 0 .71.322.71.618a.7.7 0 0 1-.16.444l-2.676 3.345A.75.75 0 0 0 3.5 20.25h3a.75.75 0 1 0 0-1.5H5.06l1.701-2.126a2.2 2.2 0 0 0 .49-1.38c0-1.216-1.037-2.12-2.21-2.12H5c-1.196 0-2.25.921-2.25 2.157v.174a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiListNumberSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiListSolidIcon],svg[mynaui-list-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 6.5A.75.75 0 0 1 4 5.75h1a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m4 0A.75.75 0 0 1 8 5.75h12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m-4 5.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m-4 5.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiListSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationCheckSolidIcon],svg[mynaui-location-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.14 4.648A8.34 8.34 0 0 1 12 2.25c2.196 0 4.304.861 5.86 2.398c1.409 1.39 2.143 2.946 2.337 4.562c.193 1.602-.152 3.21-.81 4.718c-1.306 3-3.902 5.728-6.392 7.503a1.71 1.71 0 0 1-1.99 0c-2.49-1.775-5.086-4.504-6.393-7.503c-.657-1.508-1.001-3.116-.809-4.719c.194-1.615.928-3.17 2.337-4.561m8.713 3.791a.75.75 0 0 0-1.216-.878l-2.467 3.416l-1.005-1.148a.75.75 0 1 0-1.13.987l1.38 1.576c.443.507 1.244.47 1.639-.077z"></svg:path>`,
})
export class MynauiLocationCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationHomeSolidIcon],svg[mynaui-location-home-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.5 11V9.022L12 7.928l1.5 1.094V11a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25"></svg:path><svg:path d="M6.14 4.648A8.34 8.34 0 0 1 12 2.25c2.196 0 4.304.861 5.86 2.398c1.409 1.39 2.143 2.946 2.337 4.562c.193 1.602-.152 3.21-.81 4.718c-1.306 3-3.902 5.728-6.392 7.503a1.71 1.71 0 0 1-1.99 0c-2.49-1.775-5.086-4.504-6.393-7.503c-.657-1.508-1.001-3.116-.809-4.719c.194-1.615.928-3.17 2.337-4.561m6.302 1.746a.75.75 0 0 0-.884 0l-2.25 1.64A.75.75 0 0 0 9 8.64V11c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 15 11V8.64a.75.75 0 0 0-.308-.606z"></svg:path></svg:g>`,
})
export class MynauiLocationHomeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationMinusSolidIcon],svg[mynaui-location-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.14 4.648A8.34 8.34 0 0 1 12 2.25c2.196 0 4.304.861 5.86 2.398c1.409 1.39 2.143 2.946 2.337 4.562c.193 1.602-.152 3.21-.81 4.718c-1.306 3-3.902 5.728-6.392 7.503a1.71 1.71 0 0 1-1.99 0c-2.49-1.775-5.086-4.504-6.393-7.503c-.657-1.508-1.001-3.116-.809-4.719c.194-1.615.928-3.17 2.337-4.561M9.5 9.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiLocationMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationPlusSolidIcon],svg[mynaui-location-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.14 4.648A8.34 8.34 0 0 1 12 2.25c2.196 0 4.304.861 5.86 2.398c1.409 1.39 2.143 2.946 2.337 4.562c.193 1.602-.152 3.21-.81 4.718c-1.306 3-3.902 5.728-6.392 7.503a1.71 1.71 0 0 1-1.99 0c-2.49-1.775-5.086-4.504-6.393-7.503c-.657-1.508-1.001-3.116-.809-4.719c.194-1.615.928-3.17 2.337-4.561M12.75 7.5a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0v-1.75h1.75a.75.75 0 0 0 0-1.5h-1.75z"></svg:path>`,
})
export class MynauiLocationPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationSelectedSolidIcon],svg[mynaui-location-selected-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.835 16.33a.75.75 0 0 1 .336 1.005L5.714 20.25h12.573l-1.458-2.915a.75.75 0 1 1 1.342-.67l2 4a.75.75 0 0 1-.671 1.085h-15a.75.75 0 0 1-.67-1.085l2-4a.75.75 0 0 1 1.005-.336M10.75 9a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M12 2.25a6.65 6.65 0 0 0-4.675 1.913c-1.12 1.107-1.71 2.35-1.866 3.647c-.154 1.283.123 2.564.642 3.756c1.032 2.368 3.076 4.513 5.028 5.905a1.5 1.5 0 0 0 1.742 0c1.953-1.392 3.996-3.537 5.028-5.905c.52-1.192.796-2.473.642-3.756c-.156-1.296-.745-2.54-1.866-3.647A6.66 6.66 0 0 0 12 2.25m0 4a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5"></svg:path></svg:g>`,
})
export class MynauiLocationSelectedSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationSlashSolidIcon],svg[mynaui-location-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.53 2.47a.75.75 0 0 0-1.06 0l-2.396 2.395A8.34 8.34 0 0 0 12 2.25a8.34 8.34 0 0 0-5.86 2.398C4.73 6.038 3.997 7.594 3.803 9.21c-.192 1.602.152 3.21.81 4.718c.42.964.973 1.9 1.613 2.786L2.47 20.47a.75.75 0 1 0 1.06 1.06l3.63-3.629a21.6 21.6 0 0 0 3.845 3.53a1.71 1.71 0 0 0 1.99 0c2.49-1.775 5.086-4.504 6.393-7.503c.657-1.508 1.002-3.116.809-4.719a7.2 7.2 0 0 0-1.179-3.166L21.53 3.53a.75.75 0 0 0 0-1.06m-7.173 6.112l-3.775 3.775a2.75 2.75 0 1 1 3.774-3.774"></svg:path>`,
})
export class MynauiLocationSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationSnoozeSolidIcon],svg[mynaui-location-snooze-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.14 4.648A8.34 8.34 0 0 1 12 2.25c2.196 0 4.304.861 5.86 2.398c1.409 1.39 2.143 2.946 2.337 4.562c.193 1.602-.152 3.21-.81 4.718c-1.306 3-3.902 5.728-6.392 7.503a1.71 1.71 0 0 1-1.99 0c-2.49-1.775-5.086-4.504-6.393-7.503c-.657-1.508-1.001-3.116-.809-4.719c.194-1.615.928-3.17 2.337-4.561m4.61 2.602a.75.75 0 0 0 0 1.5h1.147l-1.783 2.852a.75.75 0 0 0 .636 1.148h2.5a.75.75 0 0 0 0-1.5h-1.147l1.783-2.852a.75.75 0 0 0-.636-1.148z"></svg:path>`,
})
export class MynauiLocationSnoozeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationSolidIcon],svg[mynaui-location-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.14 4.648A8.34 8.34 0 0 1 12 2.25c2.196 0 4.304.861 5.86 2.398c1.409 1.39 2.143 2.946 2.337 4.562c.193 1.602-.152 3.21-.81 4.718c-1.306 3-3.902 5.728-6.392 7.503a1.71 1.71 0 0 1-1.99 0c-2.49-1.775-5.086-4.504-6.393-7.503c-.657-1.508-1.001-3.116-.809-4.719c.194-1.615.928-3.17 2.337-4.561M9.25 10a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0"></svg:path>`,
})
export class MynauiLocationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationUserSolidIcon],svg[mynaui-location-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 9a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M6.14 4.648A8.34 8.34 0 0 1 12 2.25c2.196 0 4.304.861 5.86 2.398c1.409 1.39 2.143 2.946 2.337 4.562c.193 1.602-.152 3.21-.81 4.718c-1.306 3-3.902 5.728-6.392 7.503a1.71 1.71 0 0 1-1.99 0c-2.49-1.775-5.086-4.504-6.393-7.503c-.657-1.508-1.001-3.116-.809-4.719c.194-1.615.928-3.17 2.337-4.561M12 6.25a2.75 2.75 0 0 0-2.01 4.627q-.286.164-.54.382c-.734.629-1.2 1.563-1.2 2.741a.75.75 0 0 0 1.5 0c0-.752.284-1.266.676-1.603c.408-.35.977-.543 1.574-.543s1.166.193 1.574.543c.392.337.676.85.676 1.603a.75.75 0 0 0 1.5 0c0-1.178-.466-2.112-1.2-2.741a3.6 3.6 0 0 0-.54-.382A2.75 2.75 0 0 0 12 6.25"></svg:path></svg:g>`,
})
export class MynauiLocationUserSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationXSolidIcon],svg[mynaui-location-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.14 4.648A8.34 8.34 0 0 1 12 2.25c2.196 0 4.304.861 5.86 2.398c1.409 1.39 2.143 2.946 2.337 4.562c.193 1.602-.152 3.21-.81 4.718c-1.306 3-3.902 5.728-6.392 7.503a1.71 1.71 0 0 1-1.99 0c-2.49-1.775-5.086-4.504-6.393-7.503c-.657-1.508-1.001-3.116-.809-4.719c.194-1.615.928-3.17 2.337-4.561m4.39 2.822a.75.75 0 1 0-1.06 1.06L10.94 10l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 11.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 10l1.47-1.47a.75.75 0 0 0-1.06-1.06L12 8.94z"></svg:path>`,
})
export class MynauiLocationXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLockCircleSolidIcon],svg[mynaui-lock-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.746 8.925v1.271h2.508v-1.27c0-.454-.163-.725-.36-.893c-.216-.182-.53-.29-.88-.283c-.717.014-1.268.451-1.268 1.175M8.75 11.957c0-.15.119-.26.252-.26h5.996c.133 0 .252.11.252.26v3.032c0 .15-.119.261-.252.261H9.002a.257.257 0 0 1-.252-.26z"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m12.504-3.075c0-.868-.338-1.568-.891-2.037c-.537-.454-1.224-.65-1.877-.637c-1.287.024-2.74.906-2.74 2.674v1.271h-.244c-.974 0-1.752.795-1.752 1.761v3.032c0 .967.778 1.761 1.752 1.761h5.996c.974 0 1.752-.794 1.752-1.76v-3.033c0-.966-.778-1.76-1.752-1.76h-.244z"></svg:path></svg:g>`,
})
export class MynauiLockCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLockDiamondSolidIcon],svg[mynaui-lock-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.746 8.925v1.271h2.508v-1.27c0-.454-.163-.725-.36-.893c-.216-.182-.53-.29-.88-.283c-.717.014-1.268.451-1.268 1.175M8.75 11.957c0-.15.119-.26.252-.26h5.996c.133 0 .252.11.252.26v3.032c0 .15-.119.261-.252.261H9.002a.257.257 0 0 1-.252-.26z"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m3.964 7.435c0-.868-.338-1.568-.891-2.037c-.537-.454-1.224-.65-1.877-.637c-1.287.024-2.74.906-2.74 2.674v1.271h-.244c-.974 0-1.752.795-1.752 1.761v3.032c0 .967.778 1.761 1.752 1.761h5.996c.974 0 1.752-.794 1.752-1.76v-3.033c0-.966-.778-1.76-1.752-1.76h-.244z"></svg:path></svg:g>`,
})
export class MynauiLockDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLockHexagonSolidIcon],svg[mynaui-lock-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.746 8.925v1.271h2.508v-1.27c0-.454-.163-.725-.36-.893c-.216-.182-.53-.29-.88-.283c-.717.014-1.268.451-1.268 1.175M8.75 11.957c0-.15.119-.26.252-.26h5.996c.133 0 .252.11.252.26v3.032c0 .15-.119.261-.252.261H9.002a.257.257 0 0 1-.252-.26z"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm4.074 6.82c0-.868-.338-1.568-.891-2.037c-.537-.454-1.224-.65-1.877-.637c-1.287.024-2.74.906-2.74 2.674v1.271h-.244c-.974 0-1.752.795-1.752 1.761v3.032c0 .967.778 1.761 1.752 1.761h5.996c.974 0 1.752-.794 1.752-1.76v-3.033c0-.966-.778-1.76-1.752-1.76h-.244z"></svg:path></svg:g>`,
})
export class MynauiLockHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLockKeyholeSolidIcon],svg[mynaui-lock-keyhole-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 8v1.25h.58c.535 0 .98 0 1.345.03c.38.031.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.694.27 1.074c.03.364.03.81.03 1.344v4.66c0 .535 0 .98-.03 1.345c-.03.38-.098.737-.27 1.074a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.239-1.074.27c-.365.03-.81.03-1.344.03H6.67c-.535 0-.98 0-1.345-.03c-.38-.031-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.202c-.172-.337-.24-.694-.27-1.074c-.03-.364-.03-.81-.03-1.344V13.17c0-.534 0-.98.03-1.344c.03-.38.098-.737.27-1.074A2.75 2.75 0 0 1 4.252 9.55c.337-.172.693-.239 1.073-.27c.365-.03.81-.03 1.345-.03h.58V8c0-1.478.33-2.901 1.107-3.975c.8-1.107 2.03-1.775 3.643-1.775s2.842.668 3.643 1.775C16.42 5.099 16.75 6.522 16.75 8m-8 0v1.25h6.5V8c0-1.283-.29-2.36-.822-3.096c-.51-.703-1.28-1.154-2.428-1.154s-1.919.45-2.428 1.154C9.04 5.64 8.75 6.717 8.75 8m8 6a.75.75 0 1 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiLockKeyholeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLockOctagonSolidIcon],svg[mynaui-lock-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.746 8.925v1.271h2.508v-1.27c0-.454-.163-.725-.36-.893c-.216-.182-.53-.29-.88-.283c-.717.014-1.268.451-1.268 1.175M8.75 11.957c0-.15.119-.26.252-.26h5.996c.133 0 .252.11.252.26v3.032c0 .15-.119.261-.252.261H9.002a.257.257 0 0 1-.252-.26z"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m6.717 6.517c0-.868-.338-1.568-.891-2.037c-.537-.454-1.224-.65-1.877-.637c-1.287.024-2.74.906-2.74 2.674v1.271h-.244c-.974 0-1.752.795-1.752 1.761v3.032c0 .967.778 1.761 1.752 1.761h5.996c.974 0 1.752-.794 1.752-1.76v-3.033c0-.966-.778-1.76-1.752-1.76h-.244z"></svg:path></svg:g>`,
})
export class MynauiLockOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLockOpenKeyholeSolidIcon],svg[mynaui-lock-open-keyhole-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.572 4.904C9.04 5.64 8.75 6.717 8.75 8v1.25h8.58c.535 0 .98 0 1.345.03c.38.031.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.694.27 1.074c.03.364.03.81.03 1.344v4.66c0 .535 0 .98-.03 1.345c-.03.38-.098.737-.27 1.074a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.239-1.074.27c-.365.03-.81.03-1.344.03H6.67c-.535 0-.98 0-1.345-.03c-.38-.031-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.202c-.172-.337-.24-.694-.27-1.074c-.03-.364-.03-.81-.03-1.344V13.17c0-.534 0-.98.03-1.344c.03-.38.098-.737.27-1.074A2.75 2.75 0 0 1 4.252 9.55c.337-.172.693-.239 1.073-.27c.365-.03.81-.03 1.345-.03h.58V8c0-1.478.33-2.901 1.107-3.975c.8-1.107 2.03-1.775 3.643-1.775c1.212 0 2.221.377 2.996 1.06c.765.673 1.25 1.599 1.51 2.619a.75.75 0 1 1-1.453.371c-.207-.807-.564-1.438-1.049-1.865c-.474-.418-1.121-.685-2.004-.685c-1.148 0-1.919.45-2.428 1.154m7.178 9.097a.75.75 0 1 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiLockOpenKeyholeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLockOpenPasswordSolidIcon],svg[mynaui-lock-open-password-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.572 4.904C9.04 5.64 8.75 6.717 8.75 8v1.25h8.58c.535 0 .98 0 1.345.03c.38.031.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.694.27 1.074c.03.364.03.81.03 1.344v4.66c0 .535 0 .98-.03 1.345c-.03.38-.098.737-.27 1.074a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.239-1.074.27c-.365.03-.81.03-1.344.03H6.67c-.535 0-.98 0-1.345-.03c-.38-.031-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.202c-.172-.337-.24-.694-.27-1.074c-.03-.364-.03-.81-.03-1.344V13.17c0-.534 0-.98.03-1.344c.03-.38.098-.737.27-1.074A2.75 2.75 0 0 1 4.252 9.55c.337-.172.693-.239 1.073-.27c.365-.03.81-.03 1.345-.03h.58V8c0-1.478.33-2.901 1.107-3.975c.8-1.107 2.03-1.775 3.643-1.775c1.212 0 2.221.377 2.996 1.06c.765.673 1.25 1.599 1.51 2.619a.75.75 0 1 1-1.453.371c-.207-.807-.564-1.438-1.049-1.865c-.474-.418-1.121-.685-2.004-.685c-1.148 0-1.919.45-2.428 1.154M12.75 15.25a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM16 14.5a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75m-7.25.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiLockOpenPasswordSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLockOpenSolidIcon],svg[mynaui-lock-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 8c0-1.283.29-2.36.822-3.096c.51-.703 1.28-1.154 2.428-1.154c.883 0 1.53.267 2.004.685c.485.427.843 1.058 1.049 1.865a.75.75 0 1 0 1.453-.371c-.26-1.02-.745-1.946-1.51-2.62C14.22 2.627 13.212 2.25 12 2.25c-1.613 0-2.842.668-3.643 1.775C7.58 5.099 7.25 6.522 7.25 8v1.25h-.58c-.535 0-.98 0-1.345.03c-.38.031-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.694-.27 1.074c-.03.364-.03.81-.03 1.344v4.66c0 .535 0 .98.03 1.345c.03.38.098.737.27 1.074a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.239 1.073.27c.365.03.81.03 1.345.03h10.66c.535 0 .98 0 1.345-.03c.38-.031.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.074c.03-.364.03-.81.03-1.344V13.17c0-.534 0-.98-.03-1.344c-.03-.38-.098-.737-.27-1.074a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.239-1.074-.27c-.365-.03-.81-.03-1.345-.03H8.75z"></svg:path>`,
})
export class MynauiLockOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLockPasswordSolidIcon],svg[mynaui-lock-password-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 8c0-1.478-.33-2.901-1.107-3.975c-.8-1.107-2.03-1.775-3.643-1.775s-2.842.668-3.643 1.775C7.58 5.099 7.25 6.522 7.25 8v1.25h-.58c-.535 0-.98 0-1.345.03c-.38.031-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.694-.27 1.074c-.03.364-.03.81-.03 1.344v4.66c0 .535 0 .98.03 1.345c.03.38.098.737.27 1.074a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.239 1.073.27c.365.03.81.03 1.345.03h10.66c.535 0 .98 0 1.345-.03c.38-.031.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.074c.03-.364.03-.81.03-1.344V13.17c0-.534 0-.98-.03-1.344c-.03-.38-.098-.737-.27-1.074a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.239-1.074-.27c-.365-.03-.81-.03-1.345-.03h-.58zm-8 0c0-1.283.29-2.36.822-3.096c.51-.703 1.28-1.154 2.428-1.154s1.919.45 2.428 1.154c.532.736.822 1.813.822 3.096v1.25h-6.5zm4 7.25v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0M16 14.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m-7.25.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiLockPasswordSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLockSolidIcon],svg[mynaui-lock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.572 4.904c.51-.703 1.28-1.154 2.428-1.154s1.919.45 2.428 1.154c.532.736.822 1.813.822 3.096v1.25h-6.5V8c0-1.283.29-2.36.822-3.096M16.75 9.25V8c0-1.478-.33-2.901-1.107-3.975c-.8-1.107-2.03-1.775-3.643-1.775s-2.842.668-3.643 1.775C7.58 5.099 7.25 6.522 7.25 8v1.25h-.58c-.535 0-.98 0-1.345.03c-.38.031-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.202c-.172.337-.24.694-.27 1.074c-.03.364-.03.81-.03 1.344v4.66c0 .535 0 .98.03 1.345c.03.38.098.737.27 1.074a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.239 1.073.27c.365.03.81.03 1.345.03h10.66c.535 0 .98 0 1.345-.03c.38-.031.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.074c.03-.364.03-.81.03-1.344V13.17c0-.534 0-.98-.03-1.344c-.03-.38-.098-.737-.27-1.074a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.239-1.074-.27c-.365-.03-.81-.03-1.345-.03z"></svg:path>`,
})
export class MynauiLockSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLockSquareSolidIcon],svg[mynaui-lock-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.746 8.925v1.271h2.508v-1.27c0-.454-.163-.725-.36-.893c-.216-.182-.53-.29-.88-.283c-.717.014-1.268.451-1.268 1.175M8.75 11.957c0-.15.119-.26.252-.26h5.996c.133 0 .252.11.252.26v3.032c0 .15-.119.261-.252.261H9.002a.257.257 0 0 1-.252-.26z"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m5.387 6.675c0-.868-.338-1.568-.891-2.037c-.537-.454-1.224-.65-1.877-.637c-1.287.024-2.74.906-2.74 2.674v1.271h-.244c-.974 0-1.752.795-1.752 1.761v3.032c0 .967.778 1.761 1.752 1.761h5.996c.974 0 1.752-.794 1.752-1.76v-3.033c0-.966-.778-1.76-1.752-1.76h-.244z"></svg:path></svg:g>`,
})
export class MynauiLockSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLockWavesSolidIcon],svg[mynaui-lock-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.746 8.925v1.271h2.508v-1.27c0-.454-.163-.725-.36-.893c-.216-.182-.53-.29-.88-.283c-.717.014-1.268.451-1.268 1.175M8.75 11.957c0-.15.119-.26.252-.26h5.996c.133 0 .252.11.252.26v3.032c0 .15-.119.261-.252.261H9.002a.257.257 0 0 1-.252-.26z"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m4.19 6.85c0-.868-.339-1.568-.892-2.037c-.537-.454-1.224-.65-1.877-.637c-1.287.024-2.74.906-2.74 2.674v1.271h-.244c-.974 0-1.752.795-1.752 1.761v3.032c0 .967.778 1.761 1.752 1.761h5.996c.974 0 1.752-.794 1.752-1.76v-3.033c0-.966-.778-1.76-1.752-1.76h-.244z"></svg:path></svg:g>`,
})
export class MynauiLockWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLoginSolidIcon],svg[mynaui-login-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.5 3.75c-.526 0-1.25.63-1.25 1.821V18.43c0 1.192.724 1.821 1.25 1.821h6.996a.75.75 0 1 1 0 1.5H6.5c-1.683 0-2.75-1.673-2.75-3.321V5.57c0-1.648 1.067-3.321 2.75-3.321h7a.75.75 0 0 1 0 1.5z"></svg:path><svg:path d="M20.25 11.996a.75.75 0 0 0-.75-.75h-5.97V7.97a.75.75 0 0 0-1.06 0l-3.451 3.45a.75.75 0 0 0-.269.576v.002c0 .193.073.385.22.532l3.5 3.5a.75.75 0 0 0 1.06 0v-3.284h5.97a.75.75 0 0 0 .75-.75"></svg:path></svg:g>`,
})
export class MynauiLoginSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiLogoutSolidIcon],svg[mynaui-logout-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.5 3.75c-.526 0-1.25.63-1.25 1.821V18.43c0 1.192.724 1.821 1.25 1.821h6.996a.75.75 0 1 1 0 1.5H6.5c-1.683 0-2.75-1.673-2.75-3.321V5.57c0-1.648 1.067-3.321 2.75-3.321h7a.75.75 0 0 1 0 1.5z"></svg:path><svg:path d="M16.53 7.97a.75.75 0 0 0-1.06 0v3.276H9.5a.75.75 0 0 0 0 1.5h5.97v3.284a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0 .22-.532v-.002a.75.75 0 0 0-.269-.575z"></svg:path></svg:g>`,
})
export class MynauiLogoutSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMagnetSolidIcon],svg[mynaui-magnet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 5A2.75 2.75 0 0 1 5 2.25h1.625A2.75 2.75 0 0 1 9.375 5v7a2.625 2.625 0 0 0 5.25 0V5a2.75 2.75 0 0 1 2.75-2.75H19A2.75 2.75 0 0 1 21.75 5v7c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM5 3.75c-.69 0-1.25.56-1.25 1.25v1.75h4.125V5c0-.69-.56-1.25-1.25-1.25zm11.125 3h4.125V5c0-.69-.56-1.25-1.25-1.25h-1.625c-.69 0-1.25.56-1.25 1.25z"></svg:path>`,
})
export class MynauiMagnetSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMaleSolidIcon],svg[mynaui-male-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.25a.75.75 0 0 0 0 1.5h2.185l-3.982 3.968a6.75 6.75 0 1 0 1.063 1.059l3.984-3.97V8a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiMaleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMapSolidIcon],svg[mynaui-map-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 16.952V4.054c-.533.26-1.056.67-1.65 1.162l-.161.134c-.746.62-1.624 1.352-2.689 1.702v12.899c.534-.261 1.056-.671 1.65-1.162l.161-.135c.746-.62 1.624-1.351 2.689-1.702m4.092-13.946c.307.123.586.235.852.326l.037.013c.463.16.87.3 1.192.456c.351.169.668.385.91.732c.24.344.334.718.377 1.107c.04.363.04.804.04 1.311v8.504c0 .726 0 1.334-.054 1.813c-.055.495-.179.981-.526 1.375a2.3 2.3 0 0 1-.746.556c-.535.247-1.081.253-1.574.168c-.483-.083-.96-.263-1.38-.437q-.21-.087-.402-.169c-.28-.119-.536-.228-.799-.32c-.374-.133-.667-.194-.902-.186a2 2 0 0 0-.435.06c-.867.213-1.599.819-2.504 1.57l-.072.059c-.874.724-1.933 1.588-3.298 1.777c-.428.06-.975.022-1.527-.062a13 13 0 0 1-1.805-.42a10 10 0 0 1-1.742-.707c-.505-.269-1.008-.617-1.317-1.06c-.24-.345-.334-.719-.377-1.108c-.04-.363-.04-.803-.04-1.311V8.549c0-.726 0-1.334.054-1.813c.055-.495.179-.981.526-1.375c.208-.235.461-.425.746-.556c.535-.247 1.081-.253 1.574-.168c.483.084.96.263 1.38.437q.21.087.402.169c.28.12.536.228.799.32c.375.133.667.195.902.186q.22-.008.435-.06c.867-.213 1.599-.819 2.504-1.57l.072-.059c.874-.723 1.933-1.587 3.298-1.777c.818-.113 1.627.082 2.326.317c.354.12.702.258 1.022.386z"></svg:path>`,
})
export class MynauiMapSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMaskSolidIcon],svg[mynaui-mask-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.35 6.75a.6.6 0 0 0-.6.6v2.188a1.25 1.25 0 0 0 1.2 1.25V7.35a.6.6 0 0 0-.6-.6m.624 5.538a2.75 2.75 0 0 1-2.724-2.75V7.35a2.1 2.1 0 1 1 4.2 0v.418l4.214-1.235a4.75 4.75 0 0 1 2.672 0l4.214 1.235V7.35a2.1 2.1 0 1 1 4.2 0v2.188a2.75 2.75 0 0 1-2.724 2.75a7.05 7.05 0 0 1-14.052 0m14.076-1.5a1.25 1.25 0 0 0 1.2-1.25V7.35a.6.6 0 1 0-1.2 0z"></svg:path>`,
})
export class MynauiMaskSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMathSolidIcon],svg[mynaui-math-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.429 2.25a.75.75 0 0 1 .75.75v2.762h2.678a.75.75 0 1 1 0 1.5H7.18v2.762a.75.75 0 0 1-1.5 0V7.262H3a.75.75 0 0 1 0-1.5h2.679V3a.75.75 0 0 1 .75-.75m7.821 2.067a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m0 4.39a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m.826 6.789a.75.75 0 0 1 1.06.013l1.889 1.934l1.887-1.934a.75.75 0 0 1 1.074 1.048l-1.913 1.96l1.913 1.959a.75.75 0 0 1-1.074 1.048l-1.887-1.934l-1.888 1.934a.75.75 0 1 1-1.074-1.048l1.914-1.96l-1.914-1.96a.75.75 0 0 1 .013-1.06M2.68 18.366a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5h-6a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiMathSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMathSquareSolidIcon],svg[mynaui-math-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M9.5 6.875a.75.75 0 0 0-1.5 0v1.25H6.75a.75.75 0 0 0 0 1.5H8v1.25a.75.75 0 0 0 1.5 0v-1.25h1.25a.75.75 0 0 0 0-1.5H9.5zm4.25 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm-.75 3.25c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75m1.63 3.641a.75.75 0 1 0-1.06 1.06l.884.885l-.884.884a.75.75 0 1 0 1.06 1.06l.884-.884l.884.884a.75.75 0 0 0 1.06-1.06l-.883-.884l.884-.884a.75.75 0 0 0-1.06-1.06l-.885.883zm-8.38 1.859c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H7a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class MynauiMathSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMaximizeOneSolidIcon],svg[mynaui-maximize-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.25a.75.75 0 0 0-.75.75l2.845 2.845L13.47 9.47a.75.75 0 1 0 1.06 1.06l2.625-2.625L20 10.75a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75zm-10 10a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75l-2.845-2.845l2.625-2.625a.75.75 0 1 0-1.06-1.06l-2.625 2.625z"></svg:path>`,
})
export class MynauiMaximizeOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMaximizeSolidIcon],svg[mynaui-maximize-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25H9.4a.75.75 0 0 1 0 1.5c-1.132 0-1.937 0-2.566.052c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566a.75.75 0 0 1-1.5 0v-.033c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m7.8 1.552c-.63-.051-1.435-.052-2.567-.052a.75.75 0 0 1 0-1.5h.033c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655V9.4a.75.75 0 0 1-1.5 0c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302M3 13.85a.75.75 0 0 1 .75.75c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052a.75.75 0 0 1 0 1.5h-.033c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V14.6a.75.75 0 0 1 .75-.75m18 0a.75.75 0 0 1 .75.75v.033c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H14.6a.75.75 0 0 1 0-1.5c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiMaximizeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMenuSolidIcon],svg[mynaui-menu-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 6.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75m0 5.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75m0 5.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiMenuSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMessageCheckSolidIcon],svg[mynaui-message-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.953 2.25c-2.317 0-4.118 0-5.52.15c-1.418.153-2.541.47-3.437 1.186c-.92.736-1.35 1.693-1.553 2.9c-.193 1.152-.193 2.618-.193 4.446v.183c0 1.782 0 3.015.2 3.934c.108.495.278.925.545 1.323c.264.392.6.722 1.001 1.042c.631.505 1.375.81 2.254 1V21a.75.75 0 0 0 1.123.65c.586-.335 1.105-.7 1.58-1.044l.304-.221a22 22 0 0 1 1.036-.73c.844-.548 1.65-.905 2.707-.905h.047c2.317 0 4.118 0 5.52-.15c1.418-.153 2.541-.47 3.437-1.186c.4-.32.737-.65 1-1.042c.268-.398.438-.828.546-1.323c.2-.919.2-2.152.2-3.934v-.183c0-1.828 0-3.294-.193-4.445c-.203-1.208-.633-2.165-1.553-2.901c-.896-.717-2.019-1.033-3.437-1.185c-1.402-.151-3.203-.151-5.52-.151zm2.831 5.642a.75.75 0 0 1 .169 1.047l-2.8 3.876a1.05 1.05 0 0 1-1.639.077l-1.378-1.576a.75.75 0 1 1 1.128-.987l1.006 1.148l2.467-3.416a.75.75 0 0 1 1.047-.169"></svg:path>`,
})
export class MynauiMessageCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMessageDotsSolidIcon],svg[mynaui-message-dots-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.433 2.4c1.402-.15 3.203-.15 5.52-.15h.094c2.317 0 4.118 0 5.52.15c1.418.153 2.541.47 3.437 1.186c.92.736 1.35 1.693 1.553 2.9c.193 1.152.193 2.618.193 4.446v.183c0 1.782 0 3.015-.2 3.934a3.7 3.7 0 0 1-.545 1.323c-.264.392-.6.722-1 1.042c-.897.717-2.02 1.033-3.438 1.185c-1.402.151-3.203.151-5.52.151H12c-1.056 0-1.863.357-2.707.906c-.342.221-.675.464-1.036.729l-.304.22c-.475.345-.994.71-1.58 1.046A.75.75 0 0 1 5.25 21v-2.585c-.879-.19-1.623-.496-2.254-1c-.4-.321-.737-.65-1-1.043a3.7 3.7 0 0 1-.546-1.323c-.2-.919-.2-2.152-.2-3.934v-.183c0-1.828 0-3.294.193-4.445c.203-1.208.633-2.165 1.553-2.901c.896-.717 2.019-1.033 3.437-1.185m2.317 8.1a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiMessageDotsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMessageMinusSolidIcon],svg[mynaui-message-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.953 2.25h.094c2.317 0 4.118 0 5.52.15c1.418.153 2.541.47 3.437 1.186c.92.736 1.35 1.693 1.553 2.9c.193 1.152.193 2.618.193 4.446v.183c0 1.782 0 3.015-.2 3.934a3.7 3.7 0 0 1-.545 1.323c-.264.392-.6.722-1 1.042c-.897.717-2.02 1.033-3.438 1.185c-1.402.151-3.203.151-5.52.151H12c-1.056 0-1.863.357-2.707.906c-.342.221-.675.464-1.036.729l-.304.22c-.475.345-.994.71-1.58 1.046A.75.75 0 0 1 5.25 21v-2.585c-.879-.19-1.623-.496-2.254-1c-.4-.321-.737-.65-1-1.043a3.7 3.7 0 0 1-.546-1.323c-.2-.919-.2-2.152-.2-3.934v-.183c0-1.828 0-3.294.193-4.445c.203-1.208.633-2.165 1.553-2.901c.896-.717 2.019-1.033 3.437-1.185c1.402-.151 3.203-.151 5.52-.151M9.5 9.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiMessageMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMessagePlusSolidIcon],svg[mynaui-message-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.953 2.25c-2.317 0-4.118 0-5.52.15c-1.418.153-2.541.47-3.437 1.186c-.92.736-1.35 1.693-1.553 2.9c-.193 1.152-.193 2.618-.193 4.446v.183c0 1.782 0 3.015.2 3.934c.108.495.278.925.545 1.323c.264.392.6.722 1.001 1.042c.631.505 1.375.81 2.254 1V21a.75.75 0 0 0 1.123.65c.586-.335 1.105-.7 1.58-1.044l.304-.221a22 22 0 0 1 1.036-.73c.844-.548 1.65-.905 2.707-.905h.047c2.317 0 4.118 0 5.52-.15c1.418-.153 2.541-.47 3.437-1.186c.4-.32.737-.65 1-1.042c.268-.398.438-.828.546-1.323c.2-.919.2-2.152.2-3.934v-.183c0-1.828 0-3.294-.193-4.445c-.203-1.208-.633-2.165-1.553-2.901c-.896-.717-2.019-1.033-3.437-1.185c-1.402-.151-3.203-.151-5.52-.151zm.047 5a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75V13a.75.75 0 0 1-1.5 0v-1.75H9.5a.75.75 0 0 1 0-1.5h1.75V8a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiMessagePlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMessageReplySolidIcon],svg[mynaui-message-reply-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.433 2.4c1.402-.15 3.203-.15 5.52-.15h.094c2.317 0 4.118 0 5.52.15c1.418.153 2.541.47 3.437 1.186c.92.736 1.35 1.693 1.553 2.9c.193 1.152.193 2.618.193 4.446v.183c0 1.782 0 3.015-.2 3.934a3.7 3.7 0 0 1-.545 1.323c-.264.392-.6.722-1 1.042c-.897.717-2.02 1.033-3.438 1.185c-1.402.151-3.203.151-5.52.151H12c-1.056 0-1.863.357-2.707.906c-.342.221-.675.464-1.036.729l-.304.22c-.475.345-.994.71-1.58 1.046A.75.75 0 0 1 5.25 21v-2.585c-.879-.19-1.623-.496-2.254-1c-.4-.321-.737-.65-1-1.043a3.7 3.7 0 0 1-.546-1.323c-.2-.919-.2-2.152-.2-3.934v-.183c0-1.828 0-3.294.193-4.445c.203-1.208.633-2.165 1.553-2.901c.896-.717 2.019-1.033 3.437-1.185m4.5 5.117a.75.75 0 0 0-1.086-1.034l-2.39 2.514a.75.75 0 0 0 0 1.033l2.39 2.514a.75.75 0 1 0 1.087-1.034l-1.186-1.246H14c.69 0 1.25.56 1.25 1.25V14a.75.75 0 0 0 1.5 0v-2.486A2.75 2.75 0 0 0 14 8.764H9.748z"></svg:path>`,
})
export class MynauiMessageReplySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMessageSolidIcon],svg[mynaui-message-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.953 2.25c-2.317 0-4.118 0-5.52.15c-1.418.153-2.541.47-3.437 1.186c-.92.736-1.35 1.693-1.553 2.9c-.193 1.152-.193 2.618-.193 4.446v.183c0 1.782 0 3.015.2 3.934c.108.495.278.925.545 1.323c.264.392.6.722 1.001 1.042c.631.505 1.375.81 2.254 1V21a.75.75 0 0 0 1.123.65c.586-.335 1.105-.7 1.58-1.044l.304-.221a22 22 0 0 1 1.036-.73c.844-.548 1.65-.905 2.707-.905h.047c2.317 0 4.118 0 5.52-.15c1.418-.153 2.541-.47 3.437-1.186c.4-.32.737-.65 1-1.042c.268-.398.438-.828.546-1.323c.2-.919.2-2.152.2-3.934v-.183c0-1.828 0-3.294-.193-4.445c-.203-1.208-.633-2.165-1.553-2.901c-.896-.717-2.019-1.033-3.437-1.185c-1.402-.151-3.203-.151-5.52-.151z"></svg:path>`,
})
export class MynauiMessageSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMessageXSolidIcon],svg[mynaui-message-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.953 2.25c-2.317 0-4.118 0-5.52.15c-1.418.153-2.541.47-3.437 1.186c-.92.736-1.35 1.693-1.553 2.9c-.193 1.152-.193 2.618-.193 4.446v.183c0 1.782 0 3.015.2 3.934c.108.495.278.925.545 1.323c.264.392.6.722 1.001 1.042c.631.505 1.375.81 2.254 1V21a.75.75 0 0 0 1.123.65c.586-.335 1.105-.7 1.58-1.044l.304-.221a22 22 0 0 1 1.036-.73c.844-.548 1.65-.905 2.707-.905h.047c2.317 0 4.118 0 5.52-.15c1.418-.153 2.541-.47 3.437-1.186c.4-.32.737-.65 1-1.042c.268-.398.438-.828.546-1.323c.2-.919.2-2.152.2-3.934v-.183c0-1.828 0-3.294-.193-4.445c-.203-1.208-.633-2.165-1.553-2.901c-.896-.717-2.019-1.033-3.437-1.185c-1.402-.151-3.203-.151-5.52-.151zM9.47 7.97a.75.75 0 0 1 1.06 0L12 9.44l1.47-1.47a.75.75 0 1 1 1.06 1.06l-1.47 1.47l1.47 1.47a.75.75 0 1 1-1.06 1.06L12 11.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiMessageXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMicrophoneSlashSolidIcon],svg[mynaui-microphone-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-2.51 0-4.75 1.767-4.75 4.179v5.142c0 1.13.49 2.117 1.27 2.848l-.97.97A6.23 6.23 0 0 1 5.75 11a.75.75 0 0 0-1.5 0c0 2.125.855 4.05 2.24 5.45l-4.02 4.02a.75.75 0 1 0 1.06 1.06l4.117-4.117a7.7 7.7 0 0 0 3.603 1.301v1.536H8a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-3.25v-1.536a7.75 7.75 0 0 0 7-7.714a.75.75 0 0 0-1.5 0a6.25 6.25 0 0 1-9.518 5.329l1.06-1.06A5.3 5.3 0 0 0 12 15.75c2.51 0 4.75-1.767 4.75-4.179v-3.26l4.78-4.78a.75.75 0 0 0-1.06-1.061l-3.727 3.726C16.605 3.904 14.429 2.25 12 2.25"></svg:path>`,
})
export class MynauiMicrophoneSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMicrophoneSolidIcon],svg[mynaui-microphone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 2.25c-2.51 0-4.75 1.767-4.75 4.179v5.142c0 2.412 2.24 4.179 4.75 4.179s4.75-1.767 4.75-4.179V6.43c0-2.412-2.24-4.179-4.75-4.179"></svg:path><svg:path d="M5.75 11a.75.75 0 0 0-1.5 0a7.75 7.75 0 0 0 7 7.714v1.536H8a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-3.25v-1.536a7.75 7.75 0 0 0 7-7.714a.75.75 0 0 0-1.5 0a6.25 6.25 0 1 1-12.5 0"></svg:path></svg:g>`,
})
export class MynauiMicrophoneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMinimizeOneSolidIcon],svg[mynaui-minimize-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.53 3.47a.75.75 0 0 0-1.06 0l-2.625 2.625L14 3.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75l-2.845-2.845L20.53 4.53a.75.75 0 0 0 0-1.06M4 13.25a.75.75 0 0 0-.75.75l2.845 2.845L3.47 19.47a.75.75 0 1 0 1.06 1.06l2.625-2.625L10 20.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiMinimizeOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMinimizeSolidIcon],svg[mynaui-minimize-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 3.02A.75.75 0 1 0 9 3c-.04 2.84-.275 4.098-1.089 4.91c-.813.815-2.07 1.05-4.911 1.091a.75.75 0 1 0 .02 1.499c2.737-.04 4.643-.22 5.951-1.528S10.46 5.758 10.5 3.021M3.02 13.51a.75.75 0 0 0-.02 1.5c2.842.04 4.099.274 4.912 1.088c.814.814 1.048 2.071 1.09 4.913a.75.75 0 1 0 1.499-.022c-.04-2.737-.22-4.643-1.528-5.951s-3.214-1.489-5.951-1.528M15.01 2.999a.75.75 0 0 0-1.5.022c.04 2.737.22 4.643 1.528 5.951s3.214 1.488 5.951 1.528a.75.75 0 1 0 .022-1.5c-2.842-.041-4.099-.275-4.913-1.089c-.813-.813-1.047-2.07-1.088-4.912m6 12.011a.75.75 0 1 0-.02-1.5c-2.738.04-4.644.22-5.952 1.528s-1.489 3.214-1.528 5.951a.75.75 0 0 0 1.5.022c.04-2.842.274-4.099 1.088-4.913c.814-.813 2.071-1.047 4.913-1.088"></svg:path>`,
})
export class MynauiMinimizeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMinusCircleSolidIcon],svg[mynaui-minus-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6.25-.75a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiMinusCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMinusDiamondSolidIcon],svg[mynaui-minus-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M8.5 11.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiMinusDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMinusHexagonSolidIcon],svg[mynaui-minus-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM8.5 11.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiMinusHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMinusOctagonSolidIcon],svg[mynaui-minus-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M8.5 11.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiMinusOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMinusSolidIcon],svg[mynaui-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"></svg:path>`,
})
export class MynauiMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMinusSquareSolidIcon],svg[mynaui-minus-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m-.867 9a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiMinusSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMinusWavesSolidIcon],svg[mynaui-minus-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M8.5 11.25h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class MynauiMinusWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMobileSignalFiveSolidIcon],svg[mynaui-mobile-signal-five-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m-4.5 5a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m-4.5 4a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75m-4.5 4a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m-4.5 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiMobileSignalFiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMobileSignalFourSolidIcon],svg[mynaui-mobile-signal-four-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 7.25a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75m-4.5 4a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75m-4.5 4a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m-4.5 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiMobileSignalFourSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMobileSignalOneSolidIcon],svg[mynaui-mobile-signal-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiMobileSignalOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMobileSignalThreeSolidIcon],svg[mynaui-mobile-signal-three-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75m-4.5 4a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m-4.5 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiMobileSignalThreeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMobileSignalTwoSolidIcon],svg[mynaui-mobile-signal-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 15.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75m-4.5 4a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiMobileSignalTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMobileSolidIcon],svg[mynaui-mobile-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 4.8c0-1.373 1.07-2.55 2.464-2.55h8.572c1.395 0 2.464 1.177 2.464 2.55v14.4c0 1.373-1.07 2.55-2.464 2.55H7.714c-1.395 0-2.464-1.177-2.464-2.55zm5.25.45a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiMobileSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMoonSolidIcon],svg[mynaui-moon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.712 3.45a.75.75 0 0 0-.668-1.197c-5.414.494-8.436 4.752-8.764 9.105c-.328 4.361 2.037 8.975 7.451 10.166c5.686 1.25 11.472-2.837 12.016-8.646a.75.75 0 0 0-1.189-.676c-2.837 2.069-6.08 1.316-8.136-.724c-2.054-2.039-2.8-5.239-.71-8.028"></svg:path>`,
})
export class MynauiMoonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMoonStarSolidIcon],svg[mynaui-moon-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 3.25a.75.75 0 0 1 .75.75v.75H20a.75.75 0 0 1 0 1.5h-.75V7a.75.75 0 0 1-1.5 0v-.75H17a.75.75 0 0 1 0-1.5h.75V4a.75.75 0 0 1 .75-.75m-6.788.2a.75.75 0 0 0-.668-1.197c-5.414.494-8.436 4.752-8.764 9.105c-.328 4.361 2.037 8.975 7.451 10.166c5.686 1.25 11.472-2.837 12.016-8.646a.75.75 0 0 0-1.189-.676c-2.837 2.069-6.08 1.316-8.136-.724c-2.054-2.039-2.8-5.239-.71-8.028"></svg:path>`,
})
export class MynauiMoonStarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMountainSolidIcon],svg[mynaui-mountain-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.674 4.705l2.654 6.025a2.39 2.39 0 0 1 3.587.94l2.596 5.542c.75 1.603-.36 3.538-2.177 3.538H4.665c-1.81 0-2.922-1.924-2.181-3.527l5.808-12.56c.88-1.905 3.537-1.877 4.382.042"></svg:path>`,
})
export class MynauiMountainSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMousePointerSolidIcon],svg[mynaui-mouse-pointer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.348 5.706c-.486-1.457.9-2.844 2.358-2.358L18.645 7.66c1.627.543 1.72 2.808.145 3.483l-4.61 1.976l6.35 6.35a.75.75 0 1 1-1.06 1.061l-6.35-6.35l-1.977 4.61c-.675 1.576-2.94 1.481-3.482-.145z"></svg:path>`,
})
export class MynauiMousePointerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMoveDiagonalOneSolidIcon],svg[mynaui-move-diagonal-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4.25a.75.75 0 0 1 .75.75L8.905 7.845l7.25 7.25L19 12.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75l2.845-2.845l-7.25-7.25L5 11.75a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 5 4.25z"></svg:path>`,
})
export class MynauiMoveDiagonalOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMoveDiagonalSolidIcon],svg[mynaui-move-diagonal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4.25a.75.75 0 0 0-.75.75l2.845 2.845l-7.25 7.25L5 12.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75l-2.845-2.845l7.25-7.25L19 11.75a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiMoveDiagonalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMoveHorizontalSolidIcon],svg[mynaui-move-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.47 7.47a.75.75 0 0 1 1.06 0v3.78h10.94V7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0v-3.78H6.53v3.78a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"></svg:path>`,
})
export class MynauiMoveHorizontalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMoveSolidIcon],svg[mynaui-move-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.47 2.47a.75.75 0 0 1 1.06 0l2.7 2.7a.75.75 0 0 1 0 1.06h-2.48v5.02h5.02V8.77a.75.75 0 0 1 1.06 0l2.7 2.7a.75.75 0 0 1 0 1.06l-2.7 2.7a.75.75 0 0 1-1.06 0v-2.48h-5.02v5.02h2.48a.75.75 0 0 1 0 1.06l-2.7 2.7a.75.75 0 0 1-1.06 0l-2.7-2.7a.75.75 0 0 1 0-1.06h2.48v-5.02H6.23v2.48a.75.75 0 0 1-1.06 0l-2.7-2.7a.75.75 0 0 1 0-1.06l2.7-2.7a.75.75 0 0 1 1.06 0v2.48h5.02V6.23H8.77a.75.75 0 0 1 0-1.06z"></svg:path>`,
})
export class MynauiMoveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMoveVerticalSolidIcon],svg[mynaui-move-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.53 5.47a.75.75 0 0 1 0 1.06h-3.78v10.94h3.78a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06h3.78V6.53H7.47a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0z"></svg:path>`,
})
export class MynauiMoveVerticalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMusicCircleSolidIcon],svg[mynaui-music-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 13.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12M14.5 8.75h-1.25v5.75a2.25 2.25 0 1 1-1.5-2.122V8.6c0-.746.604-1.35 1.35-1.35h1.4a.75.75 0 0 1 0 1.5"></svg:path></svg:g>`,
})
export class MynauiMusicCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMusicDiamondSolidIcon],svg[mynaui-music-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 13.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686m3.71 7.26h-1.25v5.75a2.25 2.25 0 1 1-1.5-2.122V8.6c0-.746.604-1.35 1.35-1.35h1.4a.75.75 0 0 1 0 1.5"></svg:path></svg:g>`,
})
export class MynauiMusicDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMusicHexagonSolidIcon],svg[mynaui-music-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 13.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0M14.5 8.75h-1.25v5.75a2.25 2.25 0 1 1-1.5-2.122V8.6c0-.746.604-1.35 1.35-1.35h1.4a.75.75 0 0 1 0 1.5"></svg:path></svg:g>`,
})
export class MynauiMusicHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMusicOctagonSolidIcon],svg[mynaui-music-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 13.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path d="M8.037 2.408c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158H8.937a2.3 2.3 0 0 0-.9.158M14.5 8.75h-1.25v5.75a2.25 2.25 0 1 1-1.5-2.122V8.6c0-.746.604-1.35 1.35-1.35h1.4a.75.75 0 0 1 0 1.5"></svg:path></svg:g>`,
})
export class MynauiMusicOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMusicSolidIcon],svg[mynaui-music-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.978 4.251c.141-.013.272.1.272.255v9.07a3.5 3.5 0 0 0-2.062-.665c-1.977 0-3.563 1.621-3.563 3.6s1.586 3.6 3.563 3.6c1.976 0 3.562-1.622 3.562-3.6V4.506c0-1.029-.88-1.843-1.91-1.749l-10.375.956a1.753 1.753 0 0 0-1.59 1.748v9.254a3.5 3.5 0 0 0-2.062-.664c-1.977 0-3.563 1.621-3.563 3.6c0 1.978 1.586 3.599 3.563 3.599c1.976 0 3.562-1.62 3.562-3.6V5.462c0-.135.102-.243.228-.254z"></svg:path>`,
})
export class MynauiMusicSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMusicSquareSolidIcon],svg[mynaui-music-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 13.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm5.133 6.5h-1.25v5.75a2.25 2.25 0 1 1-1.5-2.122V8.6c0-.746.604-1.35 1.35-1.35h1.4a.75.75 0 0 1 0 1.5"></svg:path></svg:g>`,
})
export class MynauiMusicSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMusicWavesSolidIcon],svg[mynaui-music-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 13.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path><svg:path d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M14.5 8.75h-1.25v5.75a2.25 2.25 0 1 1-1.5-2.122V8.6c0-.746.604-1.35 1.35-1.35h1.4a.75.75 0 0 1 0 1.5"></svg:path></svg:g>`,
})
export class MynauiMusicWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiMynaSolidIcon],svg[mynaui-myna-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.834 3.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.043.523-.05 1.166-.052 2.018l1.09-1.019c2.51-2.576 6.561-2.58 9.056.001l4.213 3.939c.439.41.439 1.106 0 1.516l-7.446 6.961H14.6c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.4c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052H9.4c-1.132 0-1.937 0-2.566.052"></svg:path>`,
})
export class MynauiMynaSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiNavigationOneSolidIcon],svg[mynaui-navigation-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.623 4.103c.521-1.1-.626-2.248-1.726-1.726L2.99 10.385c-1.1.52-.94 2.133.24 2.429l6.364 1.59l1.591 6.364c.295 1.18 1.908 1.34 2.43.24z"></svg:path>`,
})
export class MynauiNavigationOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiNavigationSolidIcon],svg[mynaui-navigation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.16 3.064a1.234 1.234 0 0 0-2.32 0L4.34 19.98a1.31 1.31 0 0 0 .288 1.402c.344.346.917.512 1.458.216L12 18.357l5.915 3.24c.54.297 1.113.13 1.457-.215c.336-.34.49-.877.288-1.402z"></svg:path>`,
})
export class MynauiNavigationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiNineCircleSolidIcon],svg[mynaui-nine-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0c0 .458-.171.729-.422.91c-.283.205-.735.34-1.328.34s-1.045-.135-1.328-.34c-.251-.181-.422-.452-.422-.91"></svg:path><svg:path d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m11.5 1v-.105c-.533.252-1.144.355-1.75.355c-.788 0-1.586-.175-2.207-.625c-.654-.473-1.043-1.202-1.043-2.125a3.25 3.25 0 0 1 6.5 0V13a3.75 3.75 0 0 1-3.75 3.75h-1a.75.75 0 0 1 0-1.5h1A2.25 2.25 0 0 0 13.75 13"></svg:path></svg:g>`,
})
export class MynauiNineCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiNineDiamondSolidIcon],svg[mynaui-nine-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0c0 .458-.171.729-.422.91c-.283.205-.735.34-1.328.34s-1.045-.135-1.328-.34c-.251-.181-.422-.452-.422-.91"></svg:path><svg:path d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686M13.75 13v-.105c-.533.252-1.144.355-1.75.355c-.788 0-1.586-.175-2.207-.625c-.654-.473-1.043-1.202-1.043-2.125a3.25 3.25 0 0 1 6.5 0V13a3.75 3.75 0 0 1-3.75 3.75h-1a.75.75 0 0 1 0-1.5h1A2.25 2.25 0 0 0 13.75 13"></svg:path></svg:g>`,
})
export class MynauiNineDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiNineHexagonSolidIcon],svg[mynaui-nine-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0c0 .458-.171.729-.422.91c-.283.205-.735.34-1.328.34s-1.045-.135-1.328-.34c-.251-.181-.422-.452-.422-.91"></svg:path><svg:path d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0M13.75 13v-.105c-.533.252-1.144.355-1.75.355c-.788 0-1.586-.175-2.207-.625c-.654-.473-1.043-1.202-1.043-2.125a3.25 3.25 0 0 1 6.5 0V13a3.75 3.75 0 0 1-3.75 3.75h-1a.75.75 0 0 1 0-1.5h1A2.25 2.25 0 0 0 13.75 13"></svg:path></svg:g>`,
})
export class MynauiNineHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiNineOctagonSolidIcon],svg[mynaui-nine-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0c0 .458-.171.729-.422.91c-.283.205-.735.34-1.328.34s-1.045-.135-1.328-.34c-.251-.181-.422-.452-.422-.91"></svg:path><svg:path d="M8.037 2.408c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158H8.937a2.3 2.3 0 0 0-.9.158M13.75 13v-.105c-.533.252-1.144.355-1.75.355c-.788 0-1.586-.175-2.207-.625c-.654-.473-1.043-1.202-1.043-2.125a3.25 3.25 0 0 1 6.5 0V13a3.75 3.75 0 0 1-3.75 3.75h-1a.75.75 0 0 1 0-1.5h1A2.25 2.25 0 0 0 13.75 13"></svg:path></svg:g>`,
})
export class MynauiNineOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiNineSolidIcon],svg[mynaui-nine-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.875 7.75a2.375 2.375 0 0 1 2.375 2.375c0 .63-.24 1.026-.605 1.29c-.396.286-1.005.46-1.77.46s-1.374-.174-1.77-.46c-.364-.264-.605-.66-.605-1.29a2.375 2.375 0 0 1 2.375-2.375m2.375 5.058v.442a3 3 0 0 1-3 3H10a.75.75 0 0 0 0 1.5h1.25a4.5 4.5 0 0 0 4.5-4.5v-3.125a3.875 3.875 0 0 0-7.75 0c0 1.095.459 1.95 1.226 2.505c.734.532 1.688.745 2.649.745c.845 0 1.685-.165 2.375-.567"></svg:path>`,
})
export class MynauiNineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiNineSquareSolidIcon],svg[mynaui-nine-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0c0 .458-.171.729-.422.91c-.283.205-.735.34-1.328.34s-1.045-.135-1.328-.34c-.251-.181-.422-.452-.422-.91"></svg:path><svg:path d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM13.75 13v-.105c-.533.252-1.144.355-1.75.355c-.788 0-1.586-.175-2.207-.625c-.654-.473-1.043-1.202-1.043-2.125a3.25 3.25 0 0 1 6.5 0V13a3.75 3.75 0 0 1-3.75 3.75h-1a.75.75 0 0 1 0-1.5h1A2.25 2.25 0 0 0 13.75 13"></svg:path></svg:g>`,
})
export class MynauiNineSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiNineWavesSolidIcon],svg[mynaui-nine-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10.5a1.75 1.75 0 1 1 3.5 0c0 .458-.171.729-.422.91c-.283.205-.735.34-1.328.34s-1.045-.135-1.328-.34c-.251-.181-.422-.452-.422-.91"></svg:path><svg:path d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M13.75 13v-.105c-.533.252-1.144.355-1.75.355c-.788 0-1.586-.175-2.207-.625c-.654-.473-1.043-1.202-1.043-2.125a3.25 3.25 0 0 1 6.5 0V13a3.75 3.75 0 0 1-3.75 3.75h-1a.75.75 0 0 1 0-1.5h1A2.25 2.25 0 0 0 13.75 13"></svg:path></svg:g>`,
})
export class MynauiNineWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiNotificationSolidIcon],svg[mynaui-notification-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25H11.5a.75.75 0 0 1 0 1.5H9.4c-1.132 0-1.937 0-2.566.052c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h5.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566v-2.1a.75.75 0 0 1 1.5 0v2.133c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m5.383 3.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path>`,
})
export class MynauiNotificationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiOctagonSolidIcon],svg[mynaui-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.937 2.25a2.3 2.3 0 0 0-.9.158c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158z"></svg:path>`,
})
export class MynauiOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiOneCircleSolidIcon],svg[mynaui-one-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M13.5 8a.75.75 0 0 0-1.191-.607l-2.75 2a.75.75 0 1 0 .882 1.214l1.56-1.134V16a.75.75 0 1 0 1.5 0z"></svg:path>`,
})
export class MynauiOneCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiOneDiamondSolidIcon],svg[mynaui-one-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M13.5 8a.75.75 0 0 0-1.191-.607l-2.75 2a.75.75 0 1 0 .882 1.214l1.56-1.134V16a.75.75 0 1 0 1.5 0z"></svg:path>`,
})
export class MynauiOneDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiOneHexagonSolidIcon],svg[mynaui-one-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zM13.5 8a.75.75 0 0 0-1.191-.607l-2.75 2a.75.75 0 1 0 .882 1.214l1.56-1.134V16a.75.75 0 1 0 1.5 0z"></svg:path>`,
})
export class MynauiOneHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiOneOctagonSolidIcon],svg[mynaui-one-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M13.5 8a.75.75 0 0 0-1.191-.607l-2.75 2a.75.75 0 1 0 .882 1.214l1.56-1.134V16a.75.75 0 1 0 1.5 0z"></svg:path>`,
})
export class MynauiOneOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiOneSolidIcon],svg[mynaui-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.778 6.332a.75.75 0 0 1 .41.668v10a.75.75 0 0 1-1.5 0V8.473L9.44 10.107a.75.75 0 0 1-.882-1.214l3.437-2.5a.75.75 0 0 1 .782-.061"></svg:path>`,
})
export class MynauiOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiOneSquareSolidIcon],svg[mynaui-one-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M13.5 8a.75.75 0 0 0-1.191-.607l-2.75 2a.75.75 0 1 0 .882 1.214l1.56-1.134V16a.75.75 0 1 0 1.5 0z"></svg:path>`,
})
export class MynauiOneSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiOneWavesSolidIcon],svg[mynaui-one-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M13.5 8a.75.75 0 0 0-1.191-.607l-2.75 2a.75.75 0 1 0 .882 1.214l1.56-1.134V16a.75.75 0 1 0 1.5 0z"></svg:path>`,
})
export class MynauiOneWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiOptionSolidIcon],svg[mynaui-option-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.44 7.755a7 7 0 0 0-.346-.005H3a.75.75 0 0 1 0-1.5h5.16c.262 0 .542-.001.805.083c.23.073.442.193.624.353c.208.183.352.424.487.65l.033.055l5.068 8.446c.089.15.14.233.182.295l.042.056a.3.3 0 0 0 .088.05l.07.007c.075.005.174.005.347.005H21a.75.75 0 1 1 0 1.5h-5.159c-.262 0-.544.001-.807-.083a1.75 1.75 0 0 1-.624-.353c-.208-.183-.351-.424-.486-.65l-.034-.055l-5.067-8.446a7 7 0 0 0-.182-.295l-.043-.056m-.158-.057l.07.007zM14.25 7a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiOptionSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPackageSolidIcon],svg[mynaui-package-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.669 2.282c.218-.043.443-.043.662 0c.251.048.479.167.691.277l.053.028l8.27 4.28a.75.75 0 0 1 .405.666v7.898c0 .283.002.583-.093.862a1.8 1.8 0 0 1-.395.652c-.205.214-.473.351-.723.48l-.063.033l-8.131 4.208a.75.75 0 0 1-.69 0l-8.131-4.208l-.063-.033c-.25-.129-.518-.266-.723-.48a1.8 1.8 0 0 1-.395-.652c-.095-.28-.094-.58-.093-.863V7.533a.75.75 0 0 1 .405-.666l8.269-4.28l.053-.027c.213-.111.44-.23.692-.278m.226 1.496a7 7 0 0 0-.282.141L4.668 7.514l2.827 1.384l7.356-3.703l-2.465-1.276a7 7 0 0 0-.282-.141l-.058-.024m4.45 2.292l-7.31 3.68L12 11.102l7.332-3.588zm-5.246 13.72v-7.36l-3-1.469v1a.75.75 0 0 1-1.5 0v-1.734l-3-1.468v6.624c0 .187 0 .294.005.375l.009.078a.3.3 0 0 0 .057.095c.005.004.021.017.064.042c.068.042.163.09.328.176zm.645-15.988l.06-.024z"></svg:path>`,
})
export class MynauiPackageSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPaintSolidIcon],svg[mynaui-paint-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2.25A1.75 1.75 0 0 0 3.75 4v3c0 .966.784 1.75 1.75 1.75h10A1.75 1.75 0 0 0 17.25 7v-.75h.25c.483 0 .815.09 1.003.213c.14.092.247.225.247.537v2c0 .69-.56 1.25-1.25 1.25h-7A1.75 1.75 0 0 0 8.75 12v8c0 .966.784 1.75 1.75 1.75h1a.75.75 0 0 0 0-1.5h-1a.25.25 0 0 1-.25-.25v-8a.25.25 0 0 1 .25-.25h7A2.75 2.75 0 0 0 20.25 9V7c0-.792-.34-1.41-.925-1.792c-.536-.35-1.204-.458-1.825-.458h-.25V4a1.75 1.75 0 0 0-1.75-1.75z"></svg:path>`,
})
export class MynauiPaintSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelBottomCloseSolidIcon],svg[mynaui-panel-bottom-close-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m-5.614 13.5c.005.564.017 1.024.049 1.416c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h5.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.032-.392.044-.852.05-1.416zM8.47 7.47a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06L12 9.94L9.53 7.47a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiPanelBottomCloseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelBottomInactiveSolidIcon],svg[mynaui-panel-bottom-inactive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM2.75 15a.75.75 0 0 1 .75-.75H5a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1-.75-.75m5.5 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m5.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5m4.25.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H19a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiPanelBottomInactiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelBottomOpenSolidIcon],svg[mynaui-panel-bottom-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m10.88 13.5H3.753c.005.564.017 1.024.049 1.416c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h5.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.032-.392.044-.852.05-1.416M11.47 6.47l-3 3a.75.75 0 1 0 1.06 1.06L12 8.06l2.47 2.47a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiPanelBottomOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelBottomSolidIcon],svg[mynaui-panel-bottom-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m10.88 13.5H3.753c.005.564.017 1.024.049 1.416c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h5.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.032-.392.044-.852.05-1.416"></svg:path>`,
})
export class MynauiPanelBottomSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelLeftCloseSolidIcon],svg[mynaui-panel-left-close-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.834 3.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.392.032.851.044 1.416.05V3.752c-.565.005-1.024.017-1.416.049M16.53 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L14.06 12l2.47-2.47a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class MynauiPanelLeftCloseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelLeftInactiveSolidIcon],svg[mynaui-panel-left-inactive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM9 2.75a.75.75 0 0 1 .75.75V5a.75.75 0 0 1-1.5 0V3.5A.75.75 0 0 1 9 2.75m0 5.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25M9.75 14v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 1.5 0M9 18.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V19a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiPanelLeftInactiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelLeftOpenSolidIcon],svg[mynaui-panel-left-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.834 3.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.392.032.851.044 1.416.05V3.752c-.565.005-1.024.017-1.416.049M13.47 8.47a.75.75 0 0 0 0 1.06L15.94 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiPanelLeftOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelLeftSolidIcon],svg[mynaui-panel-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.834 3.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.392.032.851.044 1.416.05V3.752c-.565.005-1.024.017-1.416.049"></svg:path>`,
})
export class MynauiPanelLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelRightCloseSolidIcon],svg[mynaui-panel-right-close-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m6.383 17.997a20 20 0 0 0 1.416-.049c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.4c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302a20 20 0 0 0-1.416-.05zM7.47 8.47a.75.75 0 0 0 0 1.06L9.94 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiPanelRightCloseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelRightInactiveSolidIcon],svg[mynaui-panel-right-inactive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm5.633.5a.75.75 0 0 1 .75.75V5a.75.75 0 0 1-1.5 0V3.5a.75.75 0 0 1 .75-.75m0 5.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m.75 5.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 1.5 0M15 18.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V19a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiPanelRightInactiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelRightOpenSolidIcon],svg[mynaui-panel-right-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m6.383 1.503v16.494a20 20 0 0 0 1.416-.049c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.4c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302a20 20 0 0 0-1.416-.05M10.53 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L8.06 12l2.47-2.47a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class MynauiPanelRightOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelRightSolidIcon],svg[mynaui-panel-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m6.383 1.503v16.494a20 20 0 0 0 1.416-.049c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.4c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302a20 20 0 0 0-1.416-.05"></svg:path>`,
})
export class MynauiPanelRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelTopCloseSolidIcon],svg[mynaui-panel-top-close-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.834 3.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.032.392-.044.851-.05 1.416h16.495a20 20 0 0 0-.049-1.416c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052H9.4c-1.132 0-1.937 0-2.566.052m4.636 8.668l-3 3a.75.75 0 1 0 1.06 1.06L12 14.06l2.47 2.47a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiPanelTopCloseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelTopInactiveSolidIcon],svg[mynaui-panel-top-inactive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M2.75 9c0 .414.336.75.75.75H5a.75.75 0 0 0 0-1.5H3.5a.75.75 0 0 0-.75.75m5.5 0c0 .414.336.75.75.75h1a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0-.75.75M14 8.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm4.25.75c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5H19a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class MynauiPanelTopInactiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelTopOpenSolidIcon],svg[mynaui-panel-top-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM6.834 3.802c.63-.051 1.434-.052 2.566-.052h5.2c1.133 0 1.937 0 2.566.052c.62.05 1.005.147 1.31.302a3.25 3.25 0 0 1 1.42 1.42c.155.305.251.69.302 1.31c.032.392.044.851.05 1.416H3.752c.005-.565.017-1.024.049-1.416c.05-.62.147-1.005.302-1.31a3.25 3.25 0 0 1 1.42-1.42c.305-.155.69-.251 1.31-.302M8.47 13.47a.75.75 0 0 1 1.06 0L12 15.94l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class MynauiPanelTopOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelTopSolidIcon],svg[mynaui-panel-top-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.834 3.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.032.392-.044.851-.05 1.416h16.495a20 20 0 0 0-.049-1.416c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052H9.4c-1.132 0-1.937 0-2.566.052"></svg:path>`,
})
export class MynauiPanelTopSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPaperclipSolidIcon],svg[mynaui-paperclip-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.523 5.38c-1.966-1.849-5.065-2.416-7.418-.146l-5.74 5.53a.75.75 0 1 1-1.04-1.08l5.738-5.53c3.076-2.966 7.1-2.112 9.487.133c1.2 1.127 2.047 2.65 2.181 4.309c.137 1.682-.468 3.425-2.03 4.932l-7.112 6.862c-2.203 2.125-5.083 1.5-6.77-.088c-.85-.798-1.459-1.884-1.556-3.08c-.098-1.218.343-2.47 1.451-3.54l7.01-6.763c1.33-1.283 3.065-.886 4.053.043c.5.47.87 1.12.93 1.851c.06.755-.217 1.517-.872 2.148l-.001.002l-5.823 5.579a.75.75 0 0 1-1.038-1.084l5.821-5.577c.355-.342.44-.671.417-.946c-.024-.3-.184-.619-.461-.88c-.567-.533-1.376-.643-1.985-.056l-7.01 6.763c-.808.78-1.056 1.6-.997 2.34c.062.761.46 1.517 1.088 2.108c1.266 1.19 3.22 1.529 4.701.1l7.112-6.862c1.263-1.218 1.675-2.529 1.577-3.731c-.1-1.226-.736-2.418-1.713-3.337"></svg:path>`,
})
export class MynauiPaperclipSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiParkingSolidIcon],svg[mynaui-parking-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.776 11.85H11.25v-2.1h1.526c.36 0 .58.132.722.299c.155.182.252.452.252.751s-.097.569-.252.751c-.142.167-.363.299-.722.299"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m8.25-3.75a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-1.65h1.526c.79 0 1.431-.318 1.864-.826c.42-.493.61-1.123.61-1.724s-.19-1.231-.61-1.724c-.433-.508-1.075-.826-1.864-.826z"></svg:path></svg:g>`,
})
export class MynauiParkingSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPasswordSolidIcon],svg[mynaui-password-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.165 8.33a.75.75 0 0 1 1.006.334L12 10.323l.83-1.659a.75.75 0 1 1 1.34.671l-.957 1.915h1.037a.75.75 0 0 1 0 1.5h-1.037l.958 1.915a.75.75 0 1 1-1.342.67L12 13.677l-.83 1.658a.75.75 0 1 1-1.34-.67l.957-1.915H9.75a.75.75 0 0 1 0-1.5h1.037l-.958-1.915a.75.75 0 0 1 .336-1.006m-6.75 0a.75.75 0 0 1 1.006.335l.829 1.658l.83-1.658a.75.75 0 0 1 1.34.67l-.956 1.915H7.5a.75.75 0 1 1 0 1.5H6.464l.957 1.915a.75.75 0 0 1-1.342.67l-.829-1.658l-.83 1.658a.75.75 0 0 1-1.34-.67l.956-1.915H3a.75.75 0 0 1 0-1.5h1.036L3.08 9.335a.75.75 0 0 1 .336-1.006m13.5 0a.75.75 0 0 1 1.006.335l.829 1.658l.83-1.658a.75.75 0 1 1 1.34.67l-.957 1.915H21a.75.75 0 1 1 0 1.5h-1.037l.958 1.915a.75.75 0 0 1-1.342.67l-.829-1.658l-.83 1.658a.75.75 0 0 1-1.34-.67l.957-1.915H16.5a.75.75 0 0 1 0-1.5h1.037l-.958-1.915a.75.75 0 0 1 .336-1.006"></svg:path>`,
})
export class MynauiPasswordSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPathSolidIcon],svg[mynaui-path-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9.75a3.74 3.74 0 0 1-2.068-.621l-6.803 6.803a3.75 3.75 0 1 1-1.06-1.06l6.802-6.804A3.75 3.75 0 1 1 18 9.75"></svg:path>`,
})
export class MynauiPathSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPauseCircleSolidIcon],svg[mynaui-pause-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-2 6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m4.75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiPauseCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPauseDiamondSolidIcon],svg[mynaui-pause-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a3.16 3.16 0 0 0-2.235.926L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588A3.16 3.16 0 0 0 12 1.25m-2 7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m4.75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiPauseDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPauseHexagonSolidIcon],svg[mynaui-pause-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75a2.63 2.63 0 0 0-1.32.355l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002A2.63 2.63 0 0 0 12 1.75m-2 6.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m4.75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiPauseHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPauseOctagonSolidIcon],svg[mynaui-pause-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.937 2.25a2.3 2.3 0 0 0-.9.158c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158zm1.063 6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m4.75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiPauseOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPauseSolidIcon],svg[mynaui-pause-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.75A1.75 1.75 0 0 0 6.25 7.5v10c0 .966.784 1.75 1.75 1.75h1a1.75 1.75 0 0 0 1.75-1.75v-10A1.75 1.75 0 0 0 9 5.75zm6.5 0a1.75 1.75 0 0 0-1.75 1.75v10c0 .966.784 1.75 1.75 1.75h1a1.75 1.75 0 0 0 1.75-1.75v-10a1.75 1.75 0 0 0-1.75-1.75z"></svg:path>`,
})
export class MynauiPauseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPauseSquareSolidIcon],svg[mynaui-pause-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm.633 6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m4.75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiPauseSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPauseWavesSolidIcon],svg[mynaui-pause-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.435 2.075a3.33 3.33 0 0 0-2.87 0c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.078.066c.506.431.867.74 1.261.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928M10 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m4.75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiPauseWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPenSolidIcon],svg[mynaui-pen-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.32 4.547c-.388-1.359.868-2.614 2.227-2.226l9.157 2.616c2.996.856 5.144 3.271 5.144 6.485c0 .49-.058.97-.164 1.437c-.042.185.012.326.083.397l2.456 2.456a1.8 1.8 0 0 1 0 2.546l-2.965 2.965a1.8 1.8 0 0 1-2.546 0l-2.46-2.46c-.07-.071-.212-.125-.397-.082a6.4 6.4 0 0 1-1.433.167c-3.214 0-5.63-2.148-6.485-5.144zM7.1 7.099a.75.75 0 0 0 0 1.061l3.005 3.006a.75.75 0 0 0 1.061-1.06L8.16 7.098a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class MynauiPenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPencilSolidIcon],svg[mynaui-pencil-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.678 3.272a3.483 3.483 0 0 1 4.928-.001l1.127 1.127a3.483 3.483 0 0 1 0 4.925L9.33 20.729a3.48 3.48 0 0 1-2.463 1.021H3a.75.75 0 0 1-.75-.75v-3.844a3.48 3.48 0 0 1 1.019-2.461zm3.867 1.06a1.983 1.983 0 0 0-2.806 0l-.896.897l3.931 3.931l.898-.898a1.983 1.983 0 0 0 0-2.804z"></svg:path>`,
})
export class MynauiPencilSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPercentageCircleSolidIcon],svg[mynaui-percentage-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.78-3.03a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 1 0 1.06-1.06zm3.59 4.65a.75.75 0 0 0 0 1.06l.353.354a.75.75 0 0 0 1.06-1.06l-.353-.354a.75.75 0 0 0-1.06 0m1.41-3.59a.75.75 0 1 0-1.06-1.06l-5 5a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class MynauiPercentageCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPercentageDiamondSolidIcon],svg[mynaui-percentage-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m-.76 7.48a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 1 0 1.06-1.06zm3.59 4.65a.75.75 0 0 0 0 1.06l.353.354a.75.75 0 0 0 1.06-1.06l-.353-.354a.75.75 0 0 0-1.06 0m1.41-3.59a.75.75 0 1 0-1.06-1.06l-5 5a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class MynauiPercentageDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPercentageHexagonSolidIcon],svg[mynaui-percentage-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm-.65 6.865a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 1 0 1.06-1.06zm3.59 4.65a.75.75 0 0 0 0 1.06l.353.354a.75.75 0 0 0 1.06-1.06l-.353-.354a.75.75 0 0 0-1.06 0m1.41-3.59a.75.75 0 1 0-1.06-1.06l-5 5a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class MynauiPercentageHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPercentageOctagonSolidIcon],svg[mynaui-percentage-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53M10.03 8.97a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 1 0 1.06-1.06zm3.59 4.65a.75.75 0 0 0 0 1.06l.353.354a.75.75 0 0 0 1.06-1.06l-.353-.354a.75.75 0 0 0-1.06 0m1.41-3.59a.75.75 0 1 0-1.06-1.06l-5 5a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class MynauiPercentageOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPercentageSolidIcon],svg[mynaui-percentage-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.058 4.206c.61-.707 1.486-.956 2.442-.956s1.831.249 2.442.956c.59.682.808 1.65.808 2.794s-.218 2.112-.808 2.794c-.61.707-1.486.956-2.442.956s-1.831-.249-2.442-.956C3.468 9.112 3.25 8.144 3.25 7s.218-2.112.808-2.794m15.472.264a.75.75 0 0 1 0 1.06l-14 14a.75.75 0 0 1-1.06-1.06l14-14a.75.75 0 0 1 1.06 0m-4.473 9.736c.612-.707 1.487-.956 2.443-.956s1.831.249 2.442.956c.59.682.808 1.65.808 2.794s-.218 2.112-.808 2.794c-.61.707-1.486.956-2.442.956s-1.831-.249-2.443-.956c-.589-.682-.807-1.65-.807-2.794s.218-2.112.807-2.794"></svg:path>`,
})
export class MynauiPercentageSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPercentageSquareSolidIcon],svg[mynaui-percentage-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.663 6.72a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 1 0 1.06-1.06zm3.59 4.65a.75.75 0 0 0 0 1.06l.353.354a.75.75 0 0 0 1.06-1.06l-.353-.354a.75.75 0 0 0-1.06 0m1.41-3.59a.75.75 0 1 0-1.06-1.06l-5 5a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class MynauiPercentageSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPercentageWavesSolidIcon],svg[mynaui-percentage-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928M10.03 8.97a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 1 0 1.06-1.06zm3.59 4.65a.75.75 0 0 0 0 1.06l.353.354a.75.75 0 0 0 1.06-1.06l-.353-.354a.75.75 0 0 0-1.06 0m1.41-3.59a.75.75 0 1 0-1.06-1.06l-5 5a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class MynauiPercentageWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPinSolidIcon],svg[mynaui-pin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.102 2.664c.628-.416 1.692-.713 2.495.09l4.647 4.648c.806.804.508 1.868.091 2.495a2.95 2.95 0 0 1-.863.85c-.334.213-.756.374-1.211.35a9 9 0 0 1-.658-.071l-.068-.01a9 9 0 0 0-.707-.073c-.504-.025-.698.06-.76.12l-2.49 2.491c-.08.08-.18.258-.256.6c-.073.33-.105.736-.113 1.186c-.007.432.008.874.024 1.3l.001.047c.015.423.03.855.009 1.194c-.065 1.031-.868 1.79-1.658 2.141c-.79.35-1.917.437-2.7-.347l-2.25-2.25L3.53 21.53a.75.75 0 1 1-1.06-1.06l4.104-4.105l-2.25-2.25c-.783-.784-.697-1.91-.346-2.7c.35-.79 1.11-1.593 2.14-1.658c.34-.021.772-.006 1.195.009l.047.001c.426.015.868.031 1.3.024c.45-.008.856-.04 1.186-.113c.342-.076.52-.177.6-.257l2.49-2.49c.061-.061.146-.256.12-.76a9 9 0 0 0-.073-.707l-.009-.068a9 9 0 0 1-.071-.658c-.025-.455.136-.877.348-1.211c.216-.34.515-.64.851-.863"></svg:path>`,
})
export class MynauiPinSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPizzaSolidIcon],svg[mynaui-pizza-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.895 3.514l4.778 15.928c.41 1.367-.864 2.641-2.231 2.231L3.514 16.895c-.921-.277-1.496-1.258-1.175-2.222A19.5 19.5 0 0 1 14.673 2.34c.964-.321 1.945.254 2.222 1.175m-1.747.248A18 18 0 0 0 3.762 15.148c-.037.11.02.261.183.31l1.802.54A16.73 16.73 0 0 1 16 5.749l-.541-1.803c-.049-.163-.2-.22-.31-.183m.382 6.708a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 0 0 1.06-1.06zm-4 4a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 0 0 1.06-1.06zm5 1a.75.75 0 1 0-1.06 1.06l.353.354a.75.75 0 0 0 1.06-1.06z"></svg:path>`,
})
export class MynauiPizzaSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlanetSolidIcon],svg[mynaui-planet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.08 12.215c-.112 3.638-3.052 6.535-6.642 6.535a6.5 6.5 0 0 1-2.948-.699c1.495-.501 3.116-1.24 4.738-2.19c1.913-1.12 3.58-2.389 4.852-3.646m-11.548 6.37a8.05 8.05 0 0 0 4.906 1.665c4.509 0 8.146-3.704 8.146-8.25q0-.697-.111-1.363c.506-.676.89-1.353 1.1-2.001c.236-.734.272-1.518-.115-2.197c-.394-.692-1.1-1.056-1.864-1.213c-.722-.149-1.576-.132-2.494.008a8.03 8.03 0 0 0-4.662-1.484C7.93 3.75 4.293 7.454 4.293 12q0 .181.008.363c-.773.851-1.371 1.707-1.716 2.516c-.368.862-.502 1.808-.043 2.615c.448.786 1.293 1.148 2.186 1.267c.81.108 1.77.037 2.804-.175m-1.354-1.307a8.3 8.3 0 0 1-1.554-2.942a6 6 0 0 0-.66 1.132c-.285.67-.242 1.067-.118 1.284c.118.207.413.433 1.081.522c.352.047.772.05 1.25.004M18.616 6.623q.378.01.676.072c.52.107.758.303.862.486c.105.183.153.49-.01.994q-.08.255-.229.548a8.3 8.3 0 0 0-1.299-2.1"></svg:path>`,
})
export class MynauiPlanetSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlayCircleSolidIcon],svg[mynaui-play-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m10.305-2.691l.048.03c.183.11.366.228.532.344c.189.133.388.287.581.445l.04.033c.301.245.599.488.811.735c.254.295.433.648.433 1.104s-.18.809-.433 1.104c-.212.247-.51.49-.81.735l-.04.033c-.194.158-.393.312-.582.445a10 10 0 0 1-.532.345l-.048.03c-.292.177-.6.365-.88.465a1.4 1.4 0 0 1-.586.09a1.2 1.2 0 0 1-.632-.24c-.368-.278-.504-.672-.569-1.01c-.061-.314-.084-.711-.109-1.144l-.003-.046A14 14 0 0 1 9.75 12c0-.254.01-.531.026-.807l.003-.046c.025-.433.048-.83.109-1.145c.065-.337.2-.731.57-1.008c.18-.136.392-.223.63-.24a1.4 1.4 0 0 1 .588.09c.278.1.587.287.879.465"></svg:path>`,
})
export class MynauiPlayCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlayDiamondSolidIcon],svg[mynaui-play-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m1.765 7.819c-.292-.178-.6-.366-.88-.466a1.4 1.4 0 0 0-.586-.09a1.2 1.2 0 0 0-.632.24c-.368.278-.504.672-.569 1.01c-.061.314-.084.711-.109 1.144l-.003.046c-.015.276-.026.553-.026.807s.01.531.026.807l.003.046c.025.433.048.83.109 1.145c.065.337.2.731.57 1.008c.18.136.392.223.63.24c.225.017.426-.031.588-.09c.278-.1.587-.287.879-.465l.048-.03a9 9 0 0 0 1.113-.789l.04-.033c.301-.245.599-.488.811-.735c.254-.295.433-.648.433-1.104s-.18-.809-.433-1.104c-.212-.247-.51-.49-.81-.735l-.04-.033a10 10 0 0 0-.582-.445a10 10 0 0 0-.532-.345z"></svg:path>`,
})
export class MynauiPlayDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlayHexagonSolidIcon],svg[mynaui-play-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm1.875 7.204c-.292-.178-.6-.366-.88-.466a1.4 1.4 0 0 0-.586-.09a1.2 1.2 0 0 0-.632.24c-.368.278-.504.672-.569 1.01c-.061.314-.084.711-.109 1.144l-.003.046c-.015.276-.026.553-.026.807s.01.531.026.807l.003.046c.025.433.048.83.109 1.145c.065.337.2.731.57 1.008c.18.136.392.223.63.24c.225.017.426-.031.588-.09c.278-.1.587-.287.879-.465l.048-.03a9 9 0 0 0 1.113-.789l.04-.033c.301-.245.599-.488.811-.735c.254-.295.433-.648.433-1.104s-.18-.809-.433-1.104c-.212-.247-.51-.49-.81-.735l-.04-.033a10 10 0 0 0-.582-.445a10 10 0 0 0-.532-.345z"></svg:path>`,
})
export class MynauiPlayHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlayOctagonSolidIcon],svg[mynaui-play-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m4.518 6.9c-.292-.177-.6-.365-.88-.465a1.4 1.4 0 0 0-.586-.09a1.2 1.2 0 0 0-.632.24c-.368.278-.504.672-.569 1.01c-.061.314-.084.711-.109 1.144l-.003.046c-.015.276-.026.553-.026.807s.01.531.026.807l.003.046c.025.433.048.83.109 1.145c.065.337.2.731.57 1.008c.18.136.392.223.63.24c.225.017.426-.031.588-.09c.278-.1.587-.287.879-.465l.048-.03a9 9 0 0 0 1.113-.789l.04-.033c.301-.245.599-.488.811-.735c.254-.295.433-.648.433-1.104s-.18-.809-.433-1.104c-.212-.247-.51-.49-.81-.735l-.04-.033a10 10 0 0 0-.582-.445a10 10 0 0 0-.532-.345z"></svg:path>`,
})
export class MynauiPlayOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlaySolidIcon],svg[mynaui-play-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.503 7.01l-.066-.04c-.748-.455-1.406-.856-1.97-1.058a2.4 2.4 0 0 0-.976-.157a1.8 1.8 0 0 0-.963.37c-.579.434-.829 1.073-.966 1.78c-.133.685-.184 1.577-.247 2.663l-.003.056c-.038.65-.062 1.293-.062 1.876s.024 1.227.062 1.877l.003.055c.063 1.086.114 1.978.247 2.662c.137.708.387 1.346.966 1.781c.286.215.607.343.963.37c.342.025.67-.047.976-.157c.564-.202 1.222-.603 1.97-1.057l.066-.04c.426-.26.844-.527 1.217-.79a24 24 0 0 0 1.335-1.022l.05-.041c.764-.623 1.412-1.152 1.86-1.672c.488-.57.785-1.182.785-1.966s-.297-1.397-.786-1.966c-.447-.52-1.095-1.05-1.858-1.672l-.05-.041c-.454-.37-.91-.724-1.336-1.022a23 23 0 0 0-1.217-.79"></svg:path>`,
})
export class MynauiPlaySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlaySquareSolidIcon],svg[mynaui-play-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m3.188 7.059c-.292-.178-.6-.366-.88-.466a1.4 1.4 0 0 0-.586-.09a1.2 1.2 0 0 0-.632.24c-.368.278-.504.672-.569 1.01c-.061.314-.084.711-.109 1.144l-.003.046c-.015.276-.026.553-.026.807s.01.531.026.807l.003.046c.025.433.048.83.109 1.145c.065.337.2.731.57 1.008c.18.136.392.223.63.24c.225.017.426-.031.588-.09c.278-.1.587-.287.879-.465l.048-.03a9 9 0 0 0 1.113-.789l.04-.033c.301-.245.599-.488.811-.735c.254-.295.433-.648.433-1.104s-.18-.809-.433-1.104c-.212-.247-.51-.49-.81-.735l-.04-.033a10 10 0 0 0-.582-.445a10 10 0 0 0-.532-.345z"></svg:path>`,
})
export class MynauiPlaySquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlayWavesSolidIcon],svg[mynaui-play-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m1.99 7.234c-.292-.178-.6-.366-.88-.466a1.4 1.4 0 0 0-.586-.09a1.2 1.2 0 0 0-.632.24c-.368.278-.504.672-.569 1.01c-.061.314-.084.711-.109 1.144l-.003.046c-.015.276-.026.553-.026.807s.01.531.026.807l.003.046c.025.433.048.83.109 1.145c.065.337.2.731.57 1.008c.18.136.392.223.63.24c.225.017.426-.031.588-.09c.278-.1.587-.287.879-.465l.048-.03a9 9 0 0 0 1.113-.789l.04-.033c.301-.245.599-.488.811-.735c.254-.295.433-.648.433-1.104s-.18-.809-.433-1.104c-.212-.247-.51-.49-.81-.735l-.04-.033a10 10 0 0 0-.582-.445a10 10 0 0 0-.532-.345z"></svg:path>`,
})
export class MynauiPlayWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlusCircleSolidIcon],svg[mynaui-plus-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 7.75a.75.75 0 0 0-.75.75v2.75H8.5a.75.75 0 0 0 0 1.5h2.75v2.75a.75.75 0 0 0 1.5 0v-2.75h2.75a.75.75 0 0 0 0-1.5h-2.75V8.5a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MynauiPlusCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlusDiamondSolidIcon],svg[mynaui-plus-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M12 7.75a.75.75 0 0 0-.75.75v2.75H8.5a.75.75 0 0 0 0 1.5h2.75v2.75a.75.75 0 0 0 1.5 0v-2.75h2.75a.75.75 0 0 0 0-1.5h-2.75V8.5a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class MynauiPlusDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlusHexagonSolidIcon],svg[mynaui-plus-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0M12 7.75a.75.75 0 0 1 .75.75v2.75h2.75a.75.75 0 0 1 0 1.5h-2.75v2.75a.75.75 0 0 1-1.5 0v-2.75H8.5a.75.75 0 0 1 0-1.5h2.75V8.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiPlusHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlusOctagonSolidIcon],svg[mynaui-plus-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158H8.937a2.3 2.3 0 0 0-.9.158M12 7.75a.75.75 0 0 1 .75.75v2.75h2.75a.75.75 0 0 1 0 1.5h-2.75v2.75a.75.75 0 0 1-1.5 0v-2.75H8.5a.75.75 0 0 1 0-1.5h2.75V8.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiPlusOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlusSolidIcon],svg[mynaui-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"></svg:path>`,
})
export class MynauiPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlusSquareSolidIcon],svg[mynaui-plus-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM12 7.75a.75.75 0 0 1 .75.75v2.75h2.75a.75.75 0 0 1 0 1.5h-2.75v2.75a.75.75 0 0 1-1.5 0v-2.75H8.5a.75.75 0 0 1 0-1.5h2.75V8.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiPlusSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPlusWavesSolidIcon],svg[mynaui-plus-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M12 7.75a.75.75 0 0 1 .75.75v2.75h2.75a.75.75 0 0 1 0 1.5h-2.75v2.75a.75.75 0 0 1-1.5 0v-2.75H8.5a.75.75 0 0 1 0-1.5h2.75V8.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiPlusWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPokeballSolidIcon],svg[mynaui-pokeball-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.75 12a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M9.353 11.25a2.751 2.751 0 0 1 5.293 0h7.075c-.383-5.034-4.589-9-9.721-9c-5.133 0-9.339 3.966-9.722 9zm5.293 1.5a2.751 2.751 0 0 1-5.293 0H2.278c.383 5.034 4.59 9 9.722 9s9.339-3.966 9.721-9z"></svg:path></svg:g>`,
})
export class MynauiPokeballSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPowerSolidIcon],svg[mynaui-power-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M6.543 5.812a.75.75 0 1 0-.992-1.124A9.73 9.73 0 0 0 2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.73 9.73 0 0 0-3.3-7.312a.75.75 0 0 0-.993 1.124a8.25 8.25 0 1 1-10.914 0"></svg:path></svg:g>`,
})
export class MynauiPowerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPresentationSolidIcon],svg[mynaui-presentation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 4A.75.75 0 0 1 3 3.25h18a.75.75 0 0 1 0 1.5h-1.15v9.028c0 .673-.271 1.317-.75 1.79a2.56 2.56 0 0 1-1.8.738h-3.473l3.2 3.16a.75.75 0 1 1-1.054 1.068L12 16.61l-3.973 3.924a.75.75 0 1 1-1.054-1.068l3.2-3.16H6.7c-.673 0-1.32-.265-1.8-.738a2.52 2.52 0 0 1-.75-1.79V4.75H3A.75.75 0 0 1 2.25 4"></svg:path>`,
})
export class MynauiPresentationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPrinterSolidIcon],svg[mynaui-printer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 5v4.25H4A1.75 1.75 0 0 0 2.25 11v8c0 .966.784 1.75 1.75 1.75h16A1.75 1.75 0 0 0 21.75 19v-8A1.75 1.75 0 0 0 20 9.25h-.25V5A1.75 1.75 0 0 0 18 3.25H6A1.75 1.75 0 0 0 4.25 5m14 4.25H5.75V5A.25.25 0 0 1 6 4.75h12a.25.25 0 0 1 .25.25zm-1.5 10h-6V17a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25zM5.25 13a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiPrinterSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiPuzzleSolidIcon],svg[mynaui-puzzle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.8 5.7a3.45 3.45 0 1 1 6.9 0c0 .083.067.15.15.15h1.576c.258 0 .494 0 .692.016c.213.018.446.057.677.175c.329.168.596.435.764.765c.118.23.157.463.175.676c.016.198.016.434.016.692v2.252c0 .258 0 .494-.016.692a1.8 1.8 0 0 1-.175.676a1.75 1.75 0 0 1-.765.765c-.23.118-.463.158-.676.175c-.198.016-.434.016-.692.016H19.2a1.95 1.95 0 1 0 0 3.9h.226c.258 0 .494 0 .692.016c.213.017.446.057.677.175c.329.168.596.435.764.764c.118.23.157.464.175.677c.016.198.016.434.016.692v.452c0 .258 0 .494-.016.692a1.8 1.8 0 0 1-.175.677a1.75 1.75 0 0 1-.765.764a1.8 1.8 0 0 1-.676.175c-.198.016-.434.016-.692.016H9.074c-.258 0-.494 0-.692-.016a1.8 1.8 0 0 1-.676-.175a1.75 1.75 0 0 1-.765-.765a1.8 1.8 0 0 1-.175-.676c-.016-.198-.016-.434-.016-.692V19c0-.292 0-.467-.011-.596a.6.6 0 0 0-.018-.12a.25.25 0 0 0-.104-.105a.6.6 0 0 0-.121-.018a8 8 0 0 0-.596-.011h-.2a3.45 3.45 0 1 1 0-6.9h.2c.292 0 .467 0 .596-.011a.6.6 0 0 0 .12-.018a.25.25 0 0 0 .105-.104a.6.6 0 0 0 .018-.121c.01-.13.011-.304.011-.596V8.174c0-.258 0-.494.016-.692a1.8 1.8 0 0 1 .175-.676a1.75 1.75 0 0 1 .765-.765a1.8 1.8 0 0 1 .676-.175c.198-.016.434-.016.692-.016h1.576a.15.15 0 0 0 .15-.15"></svg:path>`,
})
export class MynauiPuzzleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiQuestionCircleSolidIcon],svg[mynaui-question-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 12.497a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m1.872-6.814c.544.482.878 1.188.878 2.057c0 .64-.164 1.138-.45 1.543c-.256.365-.588.614-.823.79l-.027.02c-.263.198-.416.32-.524.474c-.09.127-.176.317-.176.68a.75.75 0 0 1-1.5 0c0-.64.164-1.14.45-1.544c.256-.364.588-.613.823-.79l.027-.02c.263-.198.416-.32.524-.474c.09-.127.176-.317.176-.679c0-.46-.166-.75-.372-.934a1.33 1.33 0 0 0-.878-.31c-.34 0-.657.114-.877.31c-.207.183-.373.474-.373.934a.75.75 0 0 1-1.5 0c0-.869.334-1.575.877-2.057A2.83 2.83 0 0 1 12 7.246c.66 0 1.343.218 1.872.687"></svg:path>`,
})
export class MynauiQuestionCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiQuestionDiamondSolidIcon],svg[mynaui-question-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a3.16 3.16 0 0 0-2.235.926L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588A3.16 3.16 0 0 0 12 1.25m0 13.497a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m1.872-6.814c.544.482.878 1.188.878 2.057c0 .64-.164 1.138-.45 1.543c-.256.365-.588.614-.823.79l-.027.02c-.263.198-.416.32-.524.474c-.09.127-.176.317-.176.68a.75.75 0 0 1-1.5 0c0-.64.164-1.14.45-1.544c.256-.364.588-.613.823-.79l.027-.02c.263-.198.416-.32.524-.474c.09-.127.176-.317.176-.679c0-.46-.166-.75-.372-.934a1.33 1.33 0 0 0-.878-.31c-.34 0-.657.114-.877.31c-.207.183-.373.474-.373.934a.75.75 0 0 1-1.5 0c0-.869.334-1.575.877-2.057A2.83 2.83 0 0 1 12 7.246c.66 0 1.343.218 1.872.687"></svg:path>`,
})
export class MynauiQuestionDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiQuestionHexagonSolidIcon],svg[mynaui-question-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75a2.63 2.63 0 0 0-1.32.355l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002A2.63 2.63 0 0 0 12 1.75m0 12.997a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m1.872-6.814c.544.482.878 1.188.878 2.057c0 .64-.164 1.138-.45 1.543c-.256.365-.588.614-.823.79l-.027.02c-.263.198-.416.32-.524.474c-.09.127-.176.317-.176.68a.75.75 0 0 1-1.5 0c0-.64.164-1.14.45-1.544c.256-.364.588-.613.823-.79l.027-.02c.263-.198.416-.32.524-.474c.09-.127.176-.317.176-.679c0-.46-.166-.75-.372-.934a1.33 1.33 0 0 0-.878-.31c-.34 0-.657.114-.877.31c-.207.183-.373.474-.373.934a.75.75 0 0 1-1.5 0c0-.869.334-1.575.877-2.057A2.83 2.83 0 0 1 12 7.246c.66 0 1.343.218 1.872.687"></svg:path>`,
})
export class MynauiQuestionHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiQuestionOctagonSolidIcon],svg[mynaui-question-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.937 2.25a2.3 2.3 0 0 0-.9.158c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158zM12 14.747a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m1.872-6.814c.544.482.878 1.188.878 2.057c0 .64-.164 1.138-.45 1.543c-.256.365-.588.614-.823.79l-.027.02c-.263.198-.416.32-.524.474c-.09.127-.176.317-.176.68a.75.75 0 0 1-1.5 0c0-.64.164-1.14.45-1.544c.256-.364.588-.613.823-.79l.027-.02c.263-.198.416-.32.524-.474c.09-.127.176-.317.176-.679c0-.46-.166-.75-.372-.934a1.33 1.33 0 0 0-.878-.31c-.34 0-.657.114-.877.31c-.207.183-.373.474-.373.934a.75.75 0 0 1-1.5 0c0-.869.334-1.575.877-2.057A2.83 2.83 0 0 1 12 7.246c.66 0 1.343.218 1.872.687"></svg:path>`,
})
export class MynauiQuestionOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiQuestionSolidIcon],svg[mynaui-question-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.75a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m3.94-15.538c1.104.997 1.81 2.472 1.81 4.364c0 1.41-.35 2.44-.915 3.255c-.536.775-1.241 1.315-1.846 1.777l-.033.026c-.639.488-1.167.9-1.558 1.464c-.373.539-.648 1.263-.648 2.402a.75.75 0 0 1-1.5 0c0-1.41.35-2.44.915-3.255c.536-.775 1.241-1.315 1.846-1.777l.033-.026c.639-.488 1.167-.9 1.558-1.464c.373-.54.648-1.263.648-2.402c0-1.493-.544-2.555-1.315-3.25C14.151 4.619 13.087 4.25 12 4.25s-2.151.369-2.935 1.076c-.77.695-1.315 1.758-1.315 3.25a.75.75 0 1 1-1.5 0c0-1.892.706-3.367 1.81-4.364C9.151 3.227 10.587 2.75 12 2.75s2.849.477 3.94 1.462"></svg:path>`,
})
export class MynauiQuestionSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiQuestionSquareSolidIcon],svg[mynaui-question-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM12 14.747a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m1.872-6.814c.544.482.878 1.188.878 2.057c0 .64-.164 1.138-.45 1.543c-.256.365-.588.614-.823.79l-.027.02c-.263.198-.416.32-.524.474c-.09.127-.176.317-.176.68a.75.75 0 0 1-1.5 0c0-.64.164-1.14.45-1.544c.256-.364.588-.613.823-.79l.027-.02c.263-.198.416-.32.524-.474c.09-.127.176-.317.176-.679c0-.46-.166-.75-.372-.934a1.33 1.33 0 0 0-.878-.31c-.34 0-.657.114-.877.31c-.207.183-.373.474-.373.934a.75.75 0 0 1-1.5 0c0-.869.334-1.575.877-2.057A2.83 2.83 0 0 1 12 7.246c.66 0 1.343.218 1.872.687"></svg:path>`,
})
export class MynauiQuestionSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiQuestionWavesSolidIcon],svg[mynaui-question-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.435 2.075a3.33 3.33 0 0 0-2.87 0c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.078.066c.506.431.867.74 1.261.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928M12 14.747a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m1.872-6.814c.544.482.878 1.188.878 2.057c0 .64-.164 1.138-.45 1.543c-.256.365-.588.614-.823.79l-.027.02c-.263.198-.416.32-.524.474c-.09.127-.176.317-.176.68a.75.75 0 0 1-1.5 0c0-.64.164-1.14.45-1.544c.256-.364.588-.613.823-.79l.027-.02c.263-.198.416-.32.524-.474c.09-.127.176-.317.176-.679c0-.46-.166-.75-.372-.934a1.33 1.33 0 0 0-.878-.31c-.34 0-.657.114-.877.31c-.207.183-.373.474-.373.934a.75.75 0 0 1-1.5 0c0-.869.334-1.575.877-2.057A2.83 2.83 0 0 1 12 7.246c.66 0 1.343.218 1.872.687"></svg:path>`,
})
export class MynauiQuestionWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRadioSolidIcon],svg[mynaui-radio-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.045 4.972a.75.75 0 0 1-.005 1.06A8.4 8.4 0 0 0 3.543 12c0 2.237.897 4.383 2.497 5.967a.75.75 0 0 1-1.056 1.066A9.9 9.9 0 0 1 2.044 12a9.9 9.9 0 0 1 2.94-7.033a.75.75 0 0 1 1.06.005m11.492 0a.75.75 0 0 1 1.06-.005A9.9 9.9 0 0 1 21.54 12a9.9 9.9 0 0 1-2.941 7.033a.75.75 0 1 1-1.056-1.066A8.4 8.4 0 0 0 20.04 12a8.4 8.4 0 0 0-2.497-5.967a.75.75 0 0 1-.005-1.06M9.085 7.768a.75.75 0 0 1-.006 1.06a4.5 4.5 0 0 0-.984 1.456a4.44 4.44 0 0 0 .984 4.888a.75.75 0 0 1-1.055 1.066a6 6 0 0 1-1.313-1.943a5.94 5.94 0 0 1 1.313-6.533a.75.75 0 0 1 1.06.006m5.622 0a.75.75 0 0 1 1.06-.006a6 6 0 0 1 1.313 1.943a5.94 5.94 0 0 1 0 4.59a6 6 0 0 1-1.313 1.943a.75.75 0 0 1-1.054-1.066c.421-.417.755-.912.983-1.456a4.44 4.44 0 0 0-.983-4.888a.75.75 0 0 1-.006-1.06M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path>`,
})
export class MynauiRadioSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRainbowSolidIcon],svg[mynaui-rainbow-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.25a8.25 8.25 0 0 0-8.25 8.25v2a.75.75 0 0 1-1.5 0v-2c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v2a.75.75 0 0 1-1.5 0v-2A8.25 8.25 0 0 0 12 7.25m0 3a5.25 5.25 0 0 0-5.25 5.25v2a.75.75 0 0 1-1.5 0v-2a6.75 6.75 0 0 1 13.5 0v2a.75.75 0 0 1-1.5 0v-2c0-2.9-2.35-5.25-5.25-5.25m0 3a2.25 2.25 0 0 0-2.25 2.25v2a.75.75 0 0 1-1.5 0v-2a3.75 3.75 0 1 1 7.5 0v2a.75.75 0 0 1-1.5 0v-2A2.25 2.25 0 0 0 12 13.25"></svg:path>`,
})
export class MynauiRainbowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiReceptionBellSolidIcon],svg[mynaui-reception-bell-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4.25a.75.75 0 0 0 0 1.5h1.25v1.5H10A5.75 5.75 0 0 0 4.25 13v3c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75v-3A5.75 5.75 0 0 0 14 7.25h-1.25v-1.5H14a.75.75 0 0 0 0-1.5zm-7 14a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiReceptionBellSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRecordSolidIcon],svg[mynaui-record-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 12.5a4.23 4.23 0 0 1-1.01 2.75h4.52a4.25 4.25 0 1 1 3.24 1.5h-11a4.25 4.25 0 1 1 4.25-4.25"></svg:path>`,
})
export class MynauiRecordSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRectangleSolidIcon],svg[mynaui-rectangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.125 3.75c-.813 0-1.468 0-2 .043c-.546.045-1.026.14-1.47.366a3.75 3.75 0 0 0-1.64 1.639c-.225.444-.32.924-.364 1.47c-.044.531-.044 1.187-.044 2v5.464c0 .813 0 1.469.044 2c.044.546.139 1.026.365 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365c.532.043 1.187.043 2 .043h9.75c.813 0 1.468 0 2-.043c.546-.045 1.026-.14 1.47-.366a3.75 3.75 0 0 0 1.64-1.639c.226-.444.32-.924.364-1.47c.044-.531.044-1.187.044-2V9.268c0-.813 0-1.469-.044-2c-.044-.546-.139-1.026-.365-1.47a3.75 3.75 0 0 0-1.639-1.64c-.444-.226-.924-.32-1.47-.365c-.532-.043-1.187-.043-2-.043z"></svg:path>`,
})
export class MynauiRectangleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRectangleVerticalSolidIcon],svg[mynaui-rectangle-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.267 1.25c-.812 0-1.469 0-2 .045c-.55.047-1.033.145-1.48.381a3.8 3.8 0 0 0-1.633 1.692c-.223.454-.316.944-.36 1.507c-.044.549-.044 1.227-.044 2.072v10.106c0 .845 0 1.523.043 2.072c.045.563.138 1.053.36 1.507a3.8 3.8 0 0 0 1.635 1.692c.446.236.93.334 1.478.38c.532.046 1.189.046 2 .046h5.467c.812 0 1.469 0 2-.045c.55-.047 1.033-.145 1.48-.381a3.8 3.8 0 0 0 1.633-1.692c.223-.454.316-.944.36-1.508c.044-.548.044-1.226.044-2.07V6.946c0-.845 0-1.523-.043-2.072c-.044-.563-.138-1.053-.36-1.507a3.8 3.8 0 0 0-1.635-1.692c-.446-.236-.93-.334-1.478-.38c-.532-.046-1.189-.046-2-.046z"></svg:path>`,
})
export class MynauiRectangleVerticalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRedoSolidIcon],svg[mynaui-redo-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.72 9.72 0 0 0 6.894-2.856a.75.75 0 0 0-1.06-1.06A8.25 8.25 0 1 1 12 3.75c2.556 0 4.422 1.168 6.168 2.833L16.25 8.5c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75l-1.77 1.77c-1.9-1.815-4.135-3.27-7.23-3.27"></svg:path>`,
})
export class MynauiRedoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRefreshAltSolidIcon],svg[mynaui-refresh-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.926 12.154a.75.75 0 0 0-.672.82c.49 4.93 4.658 8.776 9.724 8.776c2.724 0 5.364-.933 7.238-2.68L21 20.85a.75.75 0 0 0 .75-.75v-3.96c0-.714-.58-1.29-1.291-1.29h-3.97a.75.75 0 0 0-.75.75l2.413 2.407c-1.558 1.433-3.78 2.243-6.174 2.243c-4.29 0-7.817-3.258-8.232-7.424a.75.75 0 0 0-.82-.672m18.82-1.128c-.49-4.93-4.657-8.776-9.724-8.776c-2.724 0-5.364.933-7.238 2.68L3 3.15a.75.75 0 0 0-.75.75v3.96c0 .714.58 1.29 1.291 1.29h3.97a.75.75 0 0 0 .75-.75L5.848 5.992C7.406 4.56 9.628 3.75 12.022 3.75c4.29 0 7.817 3.258 8.232 7.424a.75.75 0 1 0 1.492-.148"></svg:path>`,
})
export class MynauiRefreshAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRefreshSolidIcon],svg[mynaui-refresh-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.074 12.154a.75.75 0 0 1 .672.82c-.49 4.93-4.658 8.776-9.724 8.776c-2.724 0-5.364-.933-7.238-2.68L3 20.85a.75.75 0 0 1-.75-.75v-3.96c0-.714.58-1.29 1.291-1.29h3.97a.75.75 0 0 1 .75.75l-2.413 2.407c1.558 1.433 3.78 2.243 6.174 2.243c4.29 0 7.817-3.258 8.232-7.424a.75.75 0 0 1 .82-.672m-18.82-1.128c.49-4.93 4.658-8.776 9.724-8.776c2.724 0 5.364.933 7.238 2.68L21 3.15a.75.75 0 0 1 .75.75v3.96c0 .714-.58 1.29-1.291 1.29h-3.97a.75.75 0 0 1-.75-.75l2.413-2.408c-1.558-1.432-3.78-2.242-6.174-2.242c-4.29 0-7.817 3.258-8.232 7.424a.75.75 0 1 1-1.492-.148"></svg:path>`,
})
export class MynauiRefreshSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRepeatSolidIcon],svg[mynaui-repeat-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.4 2.55a.75.75 0 0 1 1.05-.15l4 3a.75.75 0 0 1 0 1.2l-4 3a.75.75 0 0 1-1.05-.15v-2.7H7A3.25 3.25 0 0 0 3.75 10v2a.75.75 0 0 1-1.5 0v-2A4.75 4.75 0 0 1 7 5.25h9.4zm4.6 8.7a.75.75 0 0 1 .75.75v2A4.75 4.75 0 0 1 17 18.75H7.6v2.7a.75.75 0 0 1-1.05.15l-4-3a.75.75 0 0 1 0-1.2l4-3a.75.75 0 0 1 1.05.15v2.7H17A3.25 3.25 0 0 0 20.25 14v-2a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiRepeatSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRewindCircleSolidIcon],svg[mynaui-rewind-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-1.207 6.744c.368.277.504.67.569 1.008c.061.315.084.712.109 1.145l.002.046c.016.276.027.553.027.807s-.01.531-.027.807l-.002.046c-.025.433-.048.83-.109 1.145c-.065.337-.2.731-.57 1.008c-.18.136-.392.223-.63.24a1.4 1.4 0 0 1-.588-.09c-.278-.1-.587-.287-.879-.465l-.048-.03a10 10 0 0 1-.532-.344a10 10 0 0 1-.581-.445l-.04-.033c-.301-.245-.599-.488-.811-.735c-.254-.295-.433-.648-.433-1.104s.18-.809.433-1.104c.212-.247.51-.49.81-.735l.04-.033c.194-.158.393-.312.582-.445a10 10 0 0 1 .532-.345l.048-.03c.292-.177.6-.365.88-.465a1.4 1.4 0 0 1 .586-.09c.239.018.451.105.632.24m5.118-.24c.239.017.451.104.632.24c.368.277.504.67.569 1.008c.061.315.084.712.109 1.145l.003.046c.015.276.026.553.026.807s-.01.531-.026.807l-.003.046c-.025.433-.048.83-.109 1.145c-.065.337-.2.731-.57 1.008c-.18.136-.392.223-.63.24a1.4 1.4 0 0 1-.588-.09c-.278-.1-.587-.287-.879-.465l-.048-.03a10 10 0 0 1-.532-.344a10 10 0 0 1-.581-.445l-.04-.033c-.301-.245-.599-.488-.811-.735C12.179 12.81 12 12.456 12 12s.18-.809.433-1.104c.212-.247.51-.49.81-.735l.04-.033c.194-.158.393-.312.582-.445a10 10 0 0 1 .532-.345l.048-.03c.292-.177.6-.365.88-.465a1.4 1.4 0 0 1 .586-.09"></svg:path>`,
})
export class MynauiRewindCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRewindDiamondSolidIcon],svg[mynaui-rewind-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a3.16 3.16 0 0 0-2.235.926L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588A3.16 3.16 0 0 0 12 1.25m-1.207 7.744c.368.277.504.67.569 1.008c.061.315.084.712.109 1.145l.002.046c.016.276.027.553.027.807s-.01.531-.027.807l-.002.046c-.025.433-.048.83-.109 1.145c-.065.337-.2.731-.57 1.008c-.18.136-.392.223-.63.24a1.4 1.4 0 0 1-.588-.09c-.278-.1-.587-.287-.879-.465l-.048-.03a10 10 0 0 1-.532-.344a10 10 0 0 1-.581-.445l-.04-.033c-.301-.245-.599-.488-.811-.735c-.254-.295-.433-.648-.433-1.104s.18-.809.433-1.104c.212-.247.51-.49.81-.735l.04-.033c.194-.158.393-.312.582-.445a10 10 0 0 1 .532-.345l.048-.03c.292-.177.6-.365.88-.465a1.4 1.4 0 0 1 .586-.09c.239.018.451.105.632.24m5.118-.24c.239.017.451.104.632.24c.368.277.504.67.569 1.008c.061.315.084.712.109 1.145l.003.046c.015.276.026.553.026.807s-.01.531-.026.807l-.003.046c-.025.433-.048.83-.109 1.145c-.065.337-.2.731-.57 1.008c-.18.136-.392.223-.63.24a1.4 1.4 0 0 1-.588-.09c-.278-.1-.587-.287-.879-.465l-.048-.03a10 10 0 0 1-.532-.344a10 10 0 0 1-.581-.445l-.04-.033c-.301-.245-.599-.488-.811-.735C12.179 12.81 12 12.456 12 12s.18-.809.433-1.104c.212-.247.51-.49.81-.735l.04-.033c.194-.158.393-.312.582-.445a10 10 0 0 1 .532-.345l.048-.03c.292-.177.6-.365.88-.465a1.4 1.4 0 0 1 .586-.09"></svg:path>`,
})
export class MynauiRewindDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRewindHexagonSolidIcon],svg[mynaui-rewind-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75a2.63 2.63 0 0 0-1.32.355l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002A2.63 2.63 0 0 0 12 1.75m-1.207 7.244c.368.277.504.67.569 1.008c.061.315.084.712.109 1.145l.002.046c.016.276.027.553.027.807s-.01.531-.027.807l-.002.046c-.025.433-.048.83-.109 1.145c-.065.337-.2.731-.57 1.008c-.18.136-.392.223-.63.24a1.4 1.4 0 0 1-.588-.09c-.278-.1-.587-.287-.879-.465l-.048-.03a10 10 0 0 1-.532-.344a10 10 0 0 1-.581-.445l-.04-.033c-.301-.245-.599-.488-.811-.735c-.254-.295-.433-.648-.433-1.104s.18-.809.433-1.104c.212-.247.51-.49.81-.735l.04-.033c.194-.158.393-.312.582-.445a10 10 0 0 1 .532-.345l.048-.03c.292-.177.6-.365.88-.465a1.4 1.4 0 0 1 .586-.09c.239.018.451.105.632.24m5.118-.24c.239.017.451.104.632.24c.368.277.504.67.569 1.008c.061.315.084.712.109 1.145l.003.046c.015.276.026.553.026.807s-.01.531-.026.807l-.003.046c-.025.433-.048.83-.109 1.145c-.065.337-.2.731-.57 1.008c-.18.136-.392.223-.63.24a1.4 1.4 0 0 1-.588-.09c-.278-.1-.587-.287-.879-.465l-.048-.03a10 10 0 0 1-.532-.344a10 10 0 0 1-.581-.445l-.04-.033c-.301-.245-.599-.488-.811-.735C12.179 12.81 12 12.456 12 12s.18-.809.433-1.104c.212-.247.51-.49.81-.735l.04-.033c.194-.158.393-.312.582-.445a10 10 0 0 1 .532-.345l.048-.03c.292-.177.6-.365.88-.465a1.4 1.4 0 0 1 .586-.09"></svg:path>`,
})
export class MynauiRewindHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRewindOctagonSolidIcon],svg[mynaui-rewind-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.937 2.25a2.3 2.3 0 0 0-.9.158c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158zm1.856 6.744c.368.277.504.67.569 1.008c.061.315.084.712.109 1.145l.002.046c.016.276.027.553.027.807s-.01.531-.027.807l-.002.046c-.025.433-.048.83-.109 1.145c-.065.337-.2.731-.57 1.008c-.18.136-.392.223-.63.24a1.4 1.4 0 0 1-.588-.09c-.278-.1-.587-.287-.879-.465l-.048-.03a10 10 0 0 1-.532-.344a10 10 0 0 1-.581-.445l-.04-.033c-.301-.245-.599-.488-.811-.735c-.254-.295-.433-.648-.433-1.104s.18-.809.433-1.104c.212-.247.51-.49.81-.735l.04-.033c.194-.158.393-.312.582-.445a10 10 0 0 1 .532-.345l.048-.03c.292-.177.6-.365.88-.465a1.4 1.4 0 0 1 .586-.09c.239.018.451.105.632.24m5.118-.24c.239.017.451.104.632.24c.368.277.504.67.569 1.008c.061.315.084.712.109 1.145l.003.046c.015.276.026.553.026.807s-.01.531-.026.807l-.003.046c-.025.433-.048.83-.109 1.145c-.065.337-.2.731-.57 1.008c-.18.136-.392.223-.63.24a1.4 1.4 0 0 1-.588-.09c-.278-.1-.587-.287-.879-.465l-.048-.03a10 10 0 0 1-.532-.344a10 10 0 0 1-.581-.445l-.04-.033c-.301-.245-.599-.488-.811-.735C12.179 12.81 12 12.456 12 12s.18-.809.433-1.104c.212-.247.51-.49.81-.735l.04-.033c.194-.158.393-.312.582-.445a10 10 0 0 1 .532-.345l.048-.03c.292-.177.6-.365.88-.465a1.4 1.4 0 0 1 .586-.09"></svg:path>`,
})
export class MynauiRewindOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRewindSolidIcon],svg[mynaui-rewind-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.635 6.587a1.63 1.63 0 0 0-.868-.332c-.309-.023-.6.042-.865.137c-.482.173-1.04.513-1.656.887l-.063.039c-.357.217-.707.441-1.022.662c-.357.251-.74.548-1.12.857l-.048.04c-.63.514-1.178.96-1.558 1.403c-.422.491-.685 1.03-.685 1.72s.263 1.229.685 1.72c.38.442.928.889 1.558 1.403l.048.04c.38.309.763.606 1.12.857c.315.22.665.445 1.022.662l.063.039c.616.374 1.174.714 1.656.887c.264.095.556.16.865.137c.322-.024.612-.14.868-.332c.519-.39.736-.959.853-1.56c.112-.58.155-1.33.207-2.228l.003-.054A28 28 0 0 0 12.75 12c0-.489-.02-1.028-.052-1.571l-.003-.054c-.052-.899-.095-1.649-.207-2.227c-.117-.602-.334-1.171-.853-1.56"></svg:path><svg:path d="M19.135 6.587a1.63 1.63 0 0 0-.868-.332c-.309-.023-.6.042-.865.137c-.483.173-1.04.513-1.656.887l-.063.039c-.357.217-.707.441-1.022.662c-.357.251-.74.548-1.12.857l-.048.04c-.63.514-1.178.96-1.558 1.403c-.422.491-.685 1.03-.685 1.72s.263 1.229.685 1.72c.38.442.928.889 1.558 1.403l.048.04c.38.309.762.606 1.12.857c.315.22.665.445 1.022.662l.063.039c.616.374 1.173.714 1.656.887c.264.095.556.16.865.137c.323-.024.612-.14.868-.332c.519-.39.736-.959.853-1.56c.112-.58.155-1.33.207-2.228l.003-.054A28 28 0 0 0 20.25 12c0-.489-.02-1.028-.052-1.571l-.003-.054c-.052-.899-.095-1.649-.207-2.227c-.117-.602-.334-1.171-.853-1.56"></svg:path></svg:g>`,
})
export class MynauiRewindSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRewindSquareSolidIcon],svg[mynaui-rewind-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm1.425 6.744c.37.277.505.67.57 1.008c.061.315.084.712.109 1.145l.002.046c.016.276.027.553.027.807s-.01.531-.027.807l-.002.046c-.025.433-.048.83-.109 1.145c-.065.337-.2.731-.57 1.008c-.18.136-.392.223-.63.24a1.4 1.4 0 0 1-.588-.09c-.278-.1-.587-.287-.879-.465l-.048-.03a10 10 0 0 1-.532-.344a10 10 0 0 1-.581-.445l-.04-.033c-.301-.245-.599-.488-.811-.735c-.254-.295-.433-.648-.433-1.104s.18-.809.433-1.104c.212-.247.51-.49.81-.735l.04-.033c.194-.158.393-.312.582-.445a10 10 0 0 1 .532-.345l.048-.03c.292-.177.6-.365.88-.465a1.4 1.4 0 0 1 .586-.09c.239.018.451.105.632.24m5.12-.24c.238.017.45.104.63.24c.37.277.505.67.57 1.008c.061.315.084.712.109 1.145l.003.046c.015.276.026.553.026.807s-.01.531-.026.807l-.003.046c-.025.433-.048.83-.109 1.145c-.065.337-.2.731-.57 1.008c-.18.136-.392.223-.63.24a1.4 1.4 0 0 1-.588-.09c-.278-.1-.587-.287-.879-.465l-.048-.03a10 10 0 0 1-.532-.344a10 10 0 0 1-.581-.445l-.04-.033c-.301-.245-.599-.488-.811-.735C12.179 12.81 12 12.456 12 12s.18-.809.433-1.104c.212-.247.51-.49.81-.735l.04-.033c.194-.158.393-.312.582-.445a10 10 0 0 1 .532-.345l.048-.03c.292-.177.6-.365.88-.465a1.4 1.4 0 0 1 .586-.09"></svg:path>`,
})
export class MynauiRewindSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRewindWavesSolidIcon],svg[mynaui-rewind-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.435 2.075a3.33 3.33 0 0 0-2.87 0c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.078.066c.506.431.867.74 1.261.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928m-2.642 6.919c.368.277.504.67.569 1.008c.061.315.084.712.109 1.145l.002.046c.016.276.027.553.027.807s-.01.531-.027.807l-.002.046c-.025.433-.048.83-.109 1.145c-.065.337-.2.731-.57 1.008c-.18.136-.392.223-.63.24a1.4 1.4 0 0 1-.588-.09c-.278-.1-.587-.287-.879-.465l-.048-.03a10 10 0 0 1-.532-.344a10 10 0 0 1-.581-.445l-.04-.033c-.301-.245-.599-.488-.811-.735c-.254-.295-.433-.648-.433-1.104s.18-.809.433-1.104c.212-.247.51-.49.81-.735l.04-.033c.194-.158.393-.312.582-.445a10 10 0 0 1 .532-.345l.048-.03c.292-.177.6-.365.88-.465a1.4 1.4 0 0 1 .586-.09c.239.018.451.105.632.24m5.118-.24c.239.017.451.104.632.24c.368.277.504.67.569 1.008c.061.315.084.712.109 1.145l.003.046c.015.276.026.553.026.807s-.01.531-.026.807l-.003.046c-.025.433-.048.83-.109 1.145c-.065.337-.2.731-.57 1.008c-.18.136-.392.223-.63.24a1.4 1.4 0 0 1-.588-.09c-.278-.1-.587-.287-.879-.465l-.048-.03a10 10 0 0 1-.532-.344a10 10 0 0 1-.581-.445l-.04-.033c-.301-.245-.599-.488-.811-.735C12.179 12.81 12 12.456 12 12s.18-.809.433-1.104c.212-.247.51-.49.81-.735l.04-.033c.194-.158.393-.312.582-.445a10 10 0 0 1 .532-.345l.048-.03c.292-.177.6-.365.88-.465a1.4 1.4 0 0 1 .586-.09"></svg:path>`,
})
export class MynauiRewindWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRhombusSolidIcon],svg[mynaui-rhombus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.42 2.964a1.77 1.77 0 0 0-2.84 0L4.62 10.89a1.85 1.85 0 0 0 0 2.222l5.96 7.925a1.77 1.77 0 0 0 2.84 0l5.96-7.925a1.85 1.85 0 0 0 0-2.222z"></svg:path>`,
})
export class MynauiRhombusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRibbonSolidIcon],svg[mynaui-ribbon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25a6.75 6.75 0 0 1 4.801 11.495l.94 6.051a1 1 0 0 1 .009.115c0 .496-.274.869-.54 1.106a2.9 2.9 0 0 1-.933.528c-.33.117-.688.19-1.03.204c-.323.014-.716-.021-1.053-.205l-2.106-1.147a.18.18 0 0 0-.176 0l-2.106 1.147c-.337.184-.73.22-1.054.206a3.6 3.6 0 0 1-1.029-.205a2.9 2.9 0 0 1-.932-.528c-.267-.237-.541-.61-.541-1.106q0-.057.009-.115l.94-6.051A6.75 6.75 0 0 1 12 2.25m4.213 17.645l.022-.02l-.787-5.07A6.7 6.7 0 0 1 12 15.75a6.7 6.7 0 0 1-3.448-.946l-.787 5.07l.022.021c.084.075.234.164.438.236c.2.071.411.112.591.12a.7.7 0 0 0 .271-.024h.001l2.106-1.147a1.68 1.68 0 0 1 1.612 0l2.106 1.147c.012.004.094.032.272.024c.18-.008.391-.049.59-.12c.205-.072.355-.16.44-.236"></svg:path>`,
})
export class MynauiRibbonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRocketSolidIcon],svg[mynaui-rocket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.83 7.11c2.238-2.523 5.72-3.61 8.92-3.61a.75.75 0 0 1 .75.75c0 3.2-1.087 6.682-3.61 8.92c-.061 1.016-.375 2.033-.824 2.926c-.5.994-1.195 1.887-1.973 2.478c-.761.578-1.745.963-2.717.601c-.92-.343-1.54-1.25-1.9-2.538l-2.113-2.114c-1.288-.359-2.195-.979-2.538-1.899c-.362-.972.023-1.956.601-2.717c.591-.778 1.484-1.473 2.478-1.973c.893-.449 1.91-.763 2.925-.823M9.5 8.892a7 7 0 0 0-.922.383c-.836.421-1.533.982-1.957 1.54c-.437.576-.493 1.01-.39 1.286c.083.226.352.557 1.094.836c.169-.379.412-.903.717-1.504c.388-.763.882-1.66 1.458-2.54m1.564 7.784c.278.742.61 1.01.836 1.095c.275.102.71.046 1.286-.39c.558-.425 1.119-1.122 1.54-1.958q.227-.451.383-.922a27 27 0 0 1-2.54 1.458c-.602.305-1.126.548-1.505.717m-6.029-.672a2.144 2.144 0 0 1 2.848.088l.009.01c.799.79.786 2.054.103 2.865c-.295.352-.698.606-1.077.792c-.387.19-.804.333-1.175.44a11 11 0 0 1-1.358.295l-.024.003l-.008.001H4.35a.75.75 0 0 1-.843-.842v-.003l.001-.008l.004-.024a7 7 0 0 1 .066-.389c.047-.251.121-.596.228-.971a7.3 7.3 0 0 1 .439-1.178c.185-.38.439-.783.79-1.08M15.687 8.22a.75.75 0 0 0-1.06 0l-.707.707a.75.75 0 0 0 1.06 1.06l.707-.707a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class MynauiRocketSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRoomServiceSolidIcon],svg[mynaui-room-service-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 20a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m10.5-16a.75.75 0 0 0-1.5 0v1.448a8.75 8.75 0 0 0-8 8.719V17c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75v-2.833a8.75 8.75 0 0 0-8-8.719z"></svg:path>`,
})
export class MynauiRoomServiceSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRowsSolidIcon],svg[mynaui-rows-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.75A1.75 1.75 0 0 0 2.25 6.5v3c0 .966.784 1.75 1.75 1.75h16a1.75 1.75 0 0 0 1.75-1.75v-3A1.75 1.75 0 0 0 20 4.75zm0 8a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.784 1.75 1.75 1.75h16a1.75 1.75 0 0 0 1.75-1.75v-3A1.75 1.75 0 0 0 20 12.75z"></svg:path>`,
})
export class MynauiRowsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRssSolidIcon],svg[mynaui-rss-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.25 11.25A.75.75 0 0 1 6 10.5a7.5 7.5 0 0 1 7.5 7.5a.75.75 0 0 1-1.5 0a6 6 0 0 0-6-6a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M5.25 6A.75.75 0 0 1 6 5.25A12.75 12.75 0 0 1 18.75 18a.75.75 0 0 1-1.5 0A11.25 11.25 0 0 0 6 6.75A.75.75 0 0 1 5.25 6m2.134 10.97a.75.75 0 0 1 0 1.06l-.354.354a.75.75 0 1 1-1.06-1.06l.353-.354a.75.75 0 0 1 1.06 0"></svg:path></svg:g>`,
})
export class MynauiRssSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRulerSolidIcon],svg[mynaui-ruler-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.908 2.392c.583-.19 1.21-.19 1.793 0c.377.123.693.338 1.003.6c.297.253.635.59 1.042.998l1.259 1.259c.41.409.748.748 1.002 1.047c.263.31.478.626.601 1.004c.19.583.19 1.21 0 1.792c-.123.378-.338.693-.6 1.003c-.254.3-.593.638-1.002 1.047l-8.864 8.864c-.409.409-.748.748-1.046 1.001c-.31.263-.626.478-1.004.6c-.582.19-1.21.19-1.792.001c-.378-.123-.694-.338-1.004-.6c-.299-.255-.638-.594-1.047-1.003l-1.26-1.259c-.406-.407-.744-.744-.997-1.042c-.262-.31-.477-.626-.6-1.003a2.9 2.9 0 0 1 0-1.793c.123-.377.338-.694.6-1.003c.254-.3.593-.638 1.002-1.047l8.864-8.864c.409-.409.748-.748 1.047-1.001c.31-.263.626-.478 1.003-.601M6.974 12l-1.061 1.06l1.753 1.753a.75.75 0 0 0 1.06-1.06zm4.796-1.291l-1.753-1.753l-1.06 1.061l1.752 1.753a.75.75 0 1 0 1.06-1.061m1.29-4.796L12 6.973l1.752 1.753a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class MynauiRulerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRupeeCircleSolidIcon],svg[mynaui-rupee-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6-4.5c0 .414.336.75.75.75h1.5c.6 0 1.012.24 1.29.587c.154.193.274.43.352.69H9a.75.75 0 1 0 0 1.5h3.142a2 2 0 0 1-.352.692c-.278.347-.69.587-1.29.587H9a.75.75 0 0 0-.542 1.268l4.25 4.444a.75.75 0 0 0 1.084-1.036l-3.045-3.185a3.03 3.03 0 0 0 2.214-1.141a3.65 3.65 0 0 0 .721-1.628H15a.75.75 0 0 0 0-1.5h-1.318a3.8 3.8 0 0 0-.476-1.278H15a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class MynauiRupeeCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRupeeDiamondSolidIcon],svg[mynaui-rupee-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.2 3.2 0 0 0-1.025.686L2.177 9.765a3.16 3.16 0 0 0 0 4.47l7.588 7.588a3.16 3.16 0 0 0 4.47 0l7.588-7.588a3.16 3.16 0 0 0 0-4.47l-7.588-7.588a3.16 3.16 0 0 0-3.445-.686M8.25 7.5A.75.75 0 0 1 9 6.75h6a.75.75 0 0 1 0 1.5h-1.794c.238.393.395.83.476 1.278H15a.75.75 0 0 1 0 1.5h-1.318a3.65 3.65 0 0 1-.721 1.628a3.03 3.03 0 0 1-2.214 1.141l3.045 3.185a.75.75 0 0 1-1.084 1.036l-4.25-4.444A.75.75 0 0 1 9 12.306h1.5c.6 0 1.012-.24 1.29-.587a2 2 0 0 0 .352-.691H9a.75.75 0 0 1 0-1.5h3.142a2 2 0 0 0-.352-.691c-.278-.347-.69-.587-1.29-.587H9a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiRupeeDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRupeeHexagonSolidIcon],svg[mynaui-rupee-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.68 2.105l-6.61 3.8l-.002.002A2.65 2.65 0 0 0 2.75 8.198v7.603a2.64 2.64 0 0 0 1.318 2.292l.003.002l6.608 3.799h.002a2.63 2.63 0 0 0 2.639 0h.001l6.608-3.8h.003A2.65 2.65 0 0 0 21.25 15.8V8.2a2.65 2.65 0 0 0-1.318-2.292l-6.61-3.8l-.002-.002a2.63 2.63 0 0 0-2.64 0M8.25 7.5A.75.75 0 0 1 9 6.75h6a.75.75 0 0 1 0 1.5h-1.794c.238.393.395.83.476 1.278H15a.75.75 0 0 1 0 1.5h-1.318a3.65 3.65 0 0 1-.721 1.628a3.03 3.03 0 0 1-2.214 1.141l3.045 3.185a.75.75 0 0 1-1.084 1.036l-4.25-4.444A.75.75 0 0 1 9 12.306h1.5c.6 0 1.012-.24 1.29-.587a2 2 0 0 0 .352-.691H9a.75.75 0 0 1 0-1.5h3.142a2 2 0 0 0-.352-.691c-.278-.347-.69-.587-1.29-.587H9a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiRupeeHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRupeeOctagonSolidIcon],svg[mynaui-rupee-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408c-.299.122-.54.31-.762.53L2.938 7.275c-.213.214-.4.45-.525.748a2.3 2.3 0 0 0-.163.914v6.126c0 .302.036.602.158.9s.31.54.53.762l4.337 4.337c.214.213.45.4.748.524c.298.125.601.164.914.164h6.126c.302 0 .602-.035.9-.158c.299-.122.54-.31.762-.53l4.337-4.337c.213-.214.4-.45.524-.748a2.3 2.3 0 0 0 .164-.914V8.937a2.3 2.3 0 0 0-.158-.9a2.3 2.3 0 0 0-.53-.762l-4.337-4.337a2.3 2.3 0 0 0-.762-.53a2.3 2.3 0 0 0-.9-.158H8.937a2.3 2.3 0 0 0-.9.158M8.25 7.5A.75.75 0 0 1 9 6.75h6a.75.75 0 0 1 0 1.5h-1.794c.238.393.395.83.476 1.278H15a.75.75 0 0 1 0 1.5h-1.318a3.65 3.65 0 0 1-.721 1.628a3.03 3.03 0 0 1-2.214 1.141l3.045 3.185a.75.75 0 0 1-1.084 1.036l-4.25-4.444A.75.75 0 0 1 9 12.306h1.5c.6 0 1.012-.24 1.29-.587a2 2 0 0 0 .352-.691H9a.75.75 0 0 1 0-1.5h3.142a2 2 0 0 0-.352-.691c-.278-.347-.69-.587-1.29-.587H9a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiRupeeOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRupeeSolidIcon],svg[mynaui-rupee-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3.5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-4.461q.112.114.217.236c.729.845 1.15 1.903 1.282 2.986H17.5a.75.75 0 0 1 0 1.5h-2.962c-.132 1.083-.553 2.141-1.282 2.987c-.911 1.055-2.267 1.735-4.006 1.735h-.9l6.464 6.268a.75.75 0 1 1-1.044 1.076l-7.792-7.555a.75.75 0 0 1 .522-1.289h2.75c1.316 0 2.253-.5 2.87-1.215c.475-.551.781-1.254.904-2.007H6.5a.75.75 0 1 1 0-1.5h6.524c-.123-.752-.429-1.456-.904-2.006c-.617-.716-1.554-1.216-2.87-1.216H6.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiRupeeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRupeeSquareSolidIcon],svg[mynaui-rupee-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M8.25 7.5c0 .414.336.75.75.75h1.5c.6 0 1.012.24 1.29.587c.154.193.274.43.352.69H9a.75.75 0 1 0 0 1.5h3.142a2 2 0 0 1-.352.692c-.278.347-.69.587-1.29.587H9a.75.75 0 0 0-.542 1.268l4.25 4.444a.75.75 0 0 0 1.084-1.036l-3.045-3.185a3.03 3.03 0 0 0 2.214-1.141a3.65 3.65 0 0 0 .721-1.628H15a.75.75 0 0 0 0-1.5h-1.318a3.8 3.8 0 0 0-.476-1.278H15a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class MynauiRupeeSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiRupeeWavesSolidIcon],svg[mynaui-rupee-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075c-.394.189-.755.497-1.26.928l-.079.066a2.56 2.56 0 0 1-1.58.655l-.102.008c-.662.053-1.135.09-1.547.236a3.33 3.33 0 0 0-2.03 2.029c-.145.412-.182.885-.235 1.547l-.008.102a2.56 2.56 0 0 1-.655 1.58l-.066.078c-.431.506-.74.867-.928 1.261a3.33 3.33 0 0 0 0 2.87c.189.394.497.755.928 1.26l.066.079c.41.48.604.939.655 1.58l.008.102c.053.662.09 1.135.236 1.547a3.33 3.33 0 0 0 2.029 2.03c.412.145.885.182 1.547.235l.102.008c.629.05 1.09.238 1.58.655l.079.066c.505.431.866.74 1.26.928a3.33 3.33 0 0 0 2.87 0c.394-.189.755-.497 1.26-.928l.079-.066c.48-.41.939-.604 1.58-.655l.102-.008c.662-.053 1.135-.09 1.547-.236a3.33 3.33 0 0 0 2.03-2.029c.145-.412.182-.885.235-1.547l.008-.102c.05-.629.238-1.09.655-1.58l.066-.079c.431-.505.74-.866.928-1.26a3.33 3.33 0 0 0 0-2.87c-.189-.394-.497-.755-.928-1.26l-.066-.079a2.56 2.56 0 0 1-.655-1.58l-.008-.102c-.053-.662-.09-1.135-.236-1.547a3.33 3.33 0 0 0-2.029-2.03c-.412-.145-.885-.182-1.547-.235l-.102-.008a2.56 2.56 0 0 1-1.58-.655l-.079-.066c-.505-.431-.866-.74-1.26-.928a3.33 3.33 0 0 0-2.87 0M8.25 7.5A.75.75 0 0 1 9 6.75h6a.75.75 0 0 1 0 1.5h-1.794c.238.393.395.83.476 1.278H15a.75.75 0 0 1 0 1.5h-1.318a3.65 3.65 0 0 1-.721 1.628a3.03 3.03 0 0 1-2.214 1.141l3.045 3.185a.75.75 0 0 1-1.084 1.036l-4.25-4.444A.75.75 0 0 1 9 12.306h1.5c.6 0 1.012-.24 1.29-.587a2 2 0 0 0 .352-.691H9a.75.75 0 0 1 0-1.5h3.142a2 2 0 0 0-.352-.691c-.278-.347-.69-.587-1.29-.587H9a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiRupeeWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSadCircleSolidIcon],svg[mynaui-sad-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25S2.25 6.615 2.25 12m6.303 3.398A5.77 5.77 0 0 1 12 14.25c1.285 0 2.474.427 3.447 1.148a.75.75 0 0 1-.894 1.204A4.27 4.27 0 0 0 12 15.75a4.27 4.27 0 0 0-2.553.852a.75.75 0 1 1-.894-1.204M10.25 10v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 1 1 1.5 0m4.25-.75a.75.75 0 0 1 .75.75v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiSadCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSadGhostSolidIcon],svg[mynaui-sad-ghost-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12.044v6.517c0 .764.308 1.57.8 2.127c.501.567 1.354 1.012 2.287.543c.696-.35 1.275-.363 1.746-.047c1.126.755 2.708.755 3.834 0c.345-.23.607-.308.825-.31c.218-.001.485.072.84.31c1.127.755 2.709.755 3.835 0c.213-.142.58-.237 1.044-.226c.454.01.898.12 1.202.273c.933.469 1.786.024 2.287-.543c.492-.557.8-1.363.8-2.126v-6.518c0-5.405-4.362-9.794-9.75-9.794s-9.75 4.389-9.75 9.794m6.303 3.354A5.77 5.77 0 0 1 12 14.25c1.285 0 2.474.427 3.447 1.148a.75.75 0 0 1-.894 1.204A4.27 4.27 0 0 0 12 15.75a4.27 4.27 0 0 0-2.553.852a.75.75 0 1 1-.894-1.204M10.25 10v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 1 1 1.5 0m4.25-.75a.75.75 0 0 1 .75.75v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiSadGhostSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSadSquareSolidIcon],svg[mynaui-sad-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm-.814 13.148A5.77 5.77 0 0 1 12 14.25c1.285 0 2.474.427 3.447 1.148a.75.75 0 0 1-.894 1.204A4.27 4.27 0 0 0 12 15.75a4.27 4.27 0 0 0-2.553.852a.75.75 0 1 1-.894-1.204M10.25 10v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 1 1 1.5 0m4.25-.75a.75.75 0 0 1 .75.75v.5a.75.75 0 1 1-1.5 0V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class MynauiSadSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSaveSolidIcon],svg[mynaui-save-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 3.75v1.897c0 .46.375.838.844.838h5.312a.84.84 0 0 0 .844-.838v-1.83a2.5 2.5 0 0 0-.57-.067zm8.813 18H6.688a3.93 3.93 0 0 1-3.938-3.927V6.176A3.93 3.93 0 0 1 6.688 2.25h8.242a3.95 3.95 0 0 1 2.783 1.15l2.383 2.374A3.92 3.92 0 0 1 21.25 8.55v9.272a3.93 3.93 0 0 1-3.937 3.927m-1.813-1.5v-4.015a.84.84 0 0 0-.844-.838H9.344a.84.84 0 0 0-.844.838v4.015z"></svg:path>`,
})
export class MynauiSaveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiScanSolidIcon],svg[mynaui-scan-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.943 2.25h.114c2.073 0 3.705 0 4.98.171c1.31.176 2.354.545 3.175 1.367c.917.916 1.27 2.11 1.42 3.639a.75.75 0 1 1-1.493.146c-.137-1.396-.434-2.172-.987-2.725c-.497-.496-1.172-.786-2.314-.94c-1.164-.156-2.696-.158-4.838-.158s-3.674.002-4.838.158c-1.142.154-1.817.444-2.314.94c-.553.553-.85 1.329-.987 2.725a.75.75 0 0 1-1.493-.146c.15-1.529.503-2.723 1.42-3.64c.821-.82 1.866-1.19 3.174-1.366c1.276-.171 2.908-.171 4.981-.171M3.041 15.754a.75.75 0 0 1 .82.673c.137 1.396.434 2.172.987 2.725c.497.496 1.172.786 2.314.94c1.164.156 2.695.158 4.838.158s3.674-.002 4.838-.158c1.142-.154 1.817-.444 2.314-.94c.553-.553.85-1.329.987-2.725a.75.75 0 0 1 1.493.146c-.15 1.529-.503 2.723-1.42 3.64c-.821.82-1.866 1.19-3.174 1.366c-1.276.171-2.908.171-4.981.171h-.114c-2.073 0-3.705 0-4.98-.171c-1.31-.176-2.354-.545-3.175-1.367c-.917-.916-1.27-2.11-1.42-3.639a.75.75 0 0 1 .673-.82M2.25 12a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M11 12a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 11 12m-4.5 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6.5 12m9 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75m4.25 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiScanSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiScissorsSolidIcon],svg[mynaui-scissors-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 6.92c0 .675-.215 1.297-.579 1.807l3.619 2.376l8.798-5.778a.75.75 0 0 1 .824 1.254l-9.196 6.038l-.029.019l-4.016 2.637c.364.51.579 1.132.579 1.808c0 1.773-1.478 3.169-3.25 3.169s-3.25-1.396-3.25-3.17c0-1.773 1.478-3.169 3.25-3.169c.53 0 1.035.126 1.482.349L10.423 12L6.982 9.74a3.3 3.3 0 0 1-1.482.349c-1.772 0-3.25-1.396-3.25-3.17c0-1.773 1.478-3.169 3.25-3.169s3.25 1.396 3.25 3.17m6.596 6.518a.75.75 0 1 0-.824 1.254l6.066 3.983a.75.75 0 1 0 .824-1.253z"></svg:path>`,
})
export class MynauiScissorsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSeaWavesSolidIcon],svg[mynaui-sea-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.427 4.361a5.72 5.72 0 0 1 5.146 0l.528.266a4.22 4.22 0 0 0 3.798 0l.528-.266a5.72 5.72 0 0 1 5.146 0l1.764.887a.75.75 0 1 1-.674 1.34l-1.764-.887a4.22 4.22 0 0 0-3.798 0l-.528.266a5.72 5.72 0 0 1-5.146 0L8.899 5.7a4.22 4.22 0 0 0-3.798 0l-1.764.887a.75.75 0 1 1-.674-1.34zm0 4.527a5.72 5.72 0 0 1 5.146 0l.528.266a4.22 4.22 0 0 0 3.798 0l.528-.266a5.72 5.72 0 0 1 5.146 0l1.764.888a.75.75 0 1 1-.674 1.34l-1.764-.888a4.22 4.22 0 0 0-3.798 0l-.528.266a5.72 5.72 0 0 1-5.146 0l-.528-.266a4.22 4.22 0 0 0-3.798 0l-1.764.888a.75.75 0 0 1-.674-1.34zm0 4.528a5.72 5.72 0 0 1 5.146 0l.528.265a4.22 4.22 0 0 0 3.798 0l.528-.265a5.72 5.72 0 0 1 5.146 0l1.764.887a.75.75 0 1 1-.674 1.34l-1.764-.888a4.22 4.22 0 0 0-3.798 0l-.528.266a5.72 5.72 0 0 1-5.146 0l-.528-.266a4.22 4.22 0 0 0-3.798 0l-1.764.888a.75.75 0 1 1-.674-1.34zm0 4.527a5.72 5.72 0 0 1 5.146 0l.528.265a4.22 4.22 0 0 0 3.798 0l.528-.265a5.72 5.72 0 0 1 5.146 0l1.764.887a.75.75 0 1 1-.674 1.34l-1.764-.887a4.22 4.22 0 0 0-3.798 0l-.528.265a5.72 5.72 0 0 1-5.146 0l-.528-.265a4.22 4.22 0 0 0-3.798 0l-1.764.887a.75.75 0 1 1-.674-1.34z"></svg:path>`,
})
export class MynauiSeaWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchCheckSolidIcon],svg[mynaui-search-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m10.607-1.06a.75.75 0 0 0-1.214-.88l-1.724 2.376l-.606-.69a.75.75 0 0 0-1.126.991l1.039 1.182a.976.976 0 0 0 1.522-.071z"></svg:path>`,
})
export class MynauiSearchCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchCircleSolidIcon],svg[mynaui-search-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.75 11.429a2.679 2.679 0 1 1 5.357 0a2.679 2.679 0 0 1-5.357 0"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m9.179-4.75a4.179 4.179 0 1 0 2.38 7.614l1.66 1.665a.75.75 0 1 0 1.062-1.059l-1.663-1.668a4.179 4.179 0 0 0-3.44-6.552"></svg:path></svg:g>`,
})
export class MynauiSearchCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchDiamondSolidIcon],svg[mynaui-search-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.75 11.429a2.679 2.679 0 1 1 5.357 0a2.679 2.679 0 0 1-5.357 0"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m.639 5.76a4.179 4.179 0 1 0 2.38 7.614l1.66 1.665a.75.75 0 1 0 1.062-1.059l-1.663-1.668a4.179 4.179 0 0 0-3.44-6.552"></svg:path></svg:g>`,
})
export class MynauiSearchDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchDotSolidIcon],svg[mynaui-search-dot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 11.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M3.25 11.5a8.25 8.25 0 0 0 13.515 6.352l2.678 2.678a.75.75 0 0 0 1.06-1.06l-2.675-2.676A8.25 8.25 0 1 0 3.25 11.5m8.25-2.75a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5"></svg:path></svg:g>`,
})
export class MynauiSearchDotSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchHexagonSolidIcon],svg[mynaui-search-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.75 11.429a2.679 2.679 0 1 1 5.357 0a2.679 2.679 0 0 1-5.357 0"></svg:path><svg:path d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm.749 5.145a4.179 4.179 0 1 0 2.38 7.614l1.66 1.665a.75.75 0 1 0 1.062-1.059l-1.663-1.668a4.179 4.179 0 0 0-3.44-6.552"></svg:path></svg:g>`,
})
export class MynauiSearchHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchHomeSolidIcon],svg[mynaui-search-home-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 13v-1.978l1.5-1.094l1.5 1.094V13a.25.25 0 0 1-.25.25h-2.5A.25.25 0 0 1 10 13"></svg:path><svg:path d="M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m10.942-1.466l-2.25-1.64a.75.75 0 0 0-.884 0l-2.25 1.64a.75.75 0 0 0-.308.606V13c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 14.5 13v-2.36a.75.75 0 0 0-.308-.606"></svg:path></svg:g>`,
})
export class MynauiSearchHomeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchMinusSolidIcon],svg[mynaui-search-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m6.25-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiSearchMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchOctagonSolidIcon],svg[mynaui-search-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.75 11.429a2.679 2.679 0 1 1 5.357 0a2.679 2.679 0 0 1-5.357 0"></svg:path><svg:path d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m3.392 4.842a4.179 4.179 0 1 0 2.38 7.614l1.66 1.665a.75.75 0 1 0 1.062-1.059l-1.663-1.668a4.179 4.179 0 0 0-3.44-6.552"></svg:path></svg:g>`,
})
export class MynauiSearchOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchPlusSolidIcon],svg[mynaui-search-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m9-2a.75.75 0 0 0-1.5 0v1.25H9.5a.75.75 0 0 0 0 1.5h1.25v1.25a.75.75 0 0 0 1.5 0v-1.25h1.25a.75.75 0 0 0 0-1.5h-1.25z"></svg:path>`,
})
export class MynauiSearchPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchSlashSolidIcon],svg[mynaui-search-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.53 2.47a.75.75 0 0 1 0 1.06l-3.257 3.258A8.2 8.2 0 0 1 19.75 11.5a8.22 8.22 0 0 1-1.922 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.22 8.22 0 0 1 11.5 19.75a8.2 8.2 0 0 1-4.712-1.477L3.53 21.53a.75.75 0 0 1-1.06-1.06l3.166-3.167A8.25 8.25 0 0 1 17.303 5.636L20.47 2.47a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiSearchSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchSnoozeSolidIcon],svg[mynaui-search-snooze-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m7-2.75a.75.75 0 0 0 0 1.5h1.147l-1.783 2.852a.75.75 0 0 0 .636 1.148h2.5a.75.75 0 0 0 0-1.5h-1.147l1.783-2.852a.75.75 0 0 0-.636-1.148z"></svg:path>`,
})
export class MynauiSearchSnoozeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchSolidIcon],svg[mynaui-search-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3.25a8.25 8.25 0 1 0 5.265 14.602l2.678 2.678a.75.75 0 0 0 1.06-1.06l-2.675-2.676A8.25 8.25 0 0 0 11.5 3.25"></svg:path>`,
})
export class MynauiSearchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchSquareSolidIcon],svg[mynaui-search-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.75 11.429a2.679 2.679 0 1 1 5.357 0a2.679 2.679 0 0 1-5.357 0"></svg:path><svg:path d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m2.062 5a4.179 4.179 0 1 0 2.38 7.614l1.66 1.665a.75.75 0 1 0 1.062-1.059l-1.663-1.668a4.179 4.179 0 0 0-3.44-6.552"></svg:path></svg:g>`,
})
export class MynauiSearchSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchUserSolidIcon],svg[mynaui-search-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10.25 10a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m8.25-4.25a2.75 2.75 0 0 0-2.01 4.627q-.286.164-.54.382c-.734.629-1.2 1.563-1.2 2.741a.75.75 0 0 0 1.5 0c0-.752.284-1.266.676-1.603c.408-.35.977-.543 1.574-.543s1.166.193 1.574.543c.392.337.676.85.676 1.603a.75.75 0 0 0 1.5 0c0-1.178-.466-2.112-1.2-2.741a3.6 3.6 0 0 0-.54-.382A2.75 2.75 0 0 0 11.5 7.25"></svg:path></svg:g>`,
})
export class MynauiSearchUserSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchWavesSolidIcon],svg[mynaui-search-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.75 11.429a2.679 2.679 0 1 1 5.357 0a2.679 2.679 0 0 1-5.357 0"></svg:path><svg:path d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m.864 5.175a4.179 4.179 0 1 0 2.38 7.614l1.66 1.665a.75.75 0 1 0 1.062-1.059l-1.663-1.668a4.179 4.179 0 0 0-3.44-6.552"></svg:path></svg:g>`,
})
export class MynauiSearchWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchXSolidIcon],svg[mynaui-search-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m7.53-1.78a.75.75 0 0 0-1.06 1.06l.97.97l-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97l.97.97a.75.75 0 1 0 1.06-1.06l-.97-.97l.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97z"></svg:path>`,
})
export class MynauiSearchXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSelectMultipleSolidIcon],svg[mynaui-select-multiple-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.17 2.25c-.534 0-.98 0-1.345.03c-.38.03-.736.098-1.074.27a2.75 2.75 0 0 0-1.201 1.2c-.172.338-.24.694-.27 1.074c-.03.365-.03.81-.03 1.345v7.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.201 1.203c.337.171.694.238 1.073.27c.364.029.81.029 1.342.029h7.668c.533 0 .978 0 1.342-.03c.38-.03.735-.098 1.072-.27a2.75 2.75 0 0 0 1.203-1.202c.171-.337.238-.694.27-1.074c.03-.364.03-.81.03-1.344V6.17c0-.535 0-.98-.03-1.345c-.032-.38-.099-.736-.27-1.074a2.75 2.75 0 0 0-1.203-1.201c-.337-.172-.693-.24-1.073-.27c-.364-.03-.81-.03-1.344-.03zM3 8.25a.75.75 0 0 1 .75.75v10.4c0 .292 0 .466.011.596a.6.6 0 0 0 .018.12a.25.25 0 0 0 .104.105a.6.6 0 0 0 .12.018c.13.01.304.011.595.011H15a.75.75 0 0 1 0 1.5H4.572c-.257 0-.493 0-.69-.016a1.8 1.8 0 0 1-.677-.175a1.75 1.75 0 0 1-.764-.765a1.8 1.8 0 0 1-.175-.676a9 9 0 0 1-.016-.692V9A.75.75 0 0 1 3 8.25m13.684-.858a.75.75 0 0 1 .169 1.047l-2.8 3.876a1.05 1.05 0 0 1-1.639.077l-1.378-1.576a.75.75 0 1 1 1.129-.987l1.005 1.148l2.467-3.416a.75.75 0 0 1 1.047-.169"></svg:path>`,
})
export class MynauiSelectMultipleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSendSolidIcon],svg[mynaui-send-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.04 2.323c1.016-.355 1.992.621 1.637 1.637l-5.925 16.93c-.385 1.098-1.915 1.16-2.387.097l-2.859-6.432l4.024-4.025a.75.75 0 0 0-1.06-1.06l-4.025 4.024l-6.432-2.859c-1.063-.473-1-2.002.097-2.387z"></svg:path>`,
})
export class MynauiSendSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiServersSolidIcon],svg[mynaui-servers-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 5.7c0-.943.661-1.95 1.75-1.95h16c1.089 0 1.75 1.007 1.75 1.95v3.6c0 .943-.661 1.95-1.75 1.95H4c-1.089 0-1.75-1.007-1.75-1.95zM6 6.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM2.25 14.7c0-.943.661-1.95 1.75-1.95h16c1.089 0 1.75 1.007 1.75 1.95v3.6c0 .943-.661 1.95-1.75 1.95H4c-1.089 0-1.75-1.007-1.75-1.95zM6 15.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiServersSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSevenCircleSolidIcon],svg[mynaui-seven-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.682-4.728a.75.75 0 0 0-.364 1.456c1.116.279 2.46.272 3.479.208l.084-.005c-.311.445-.665.975-1.02 1.55c-.511.832-1.032 1.774-1.427 2.712c-.39.926-.684 1.91-.684 2.807a.75.75 0 1 0 1.5 0c0-.603.206-1.37.566-2.225c.355-.843.834-1.713 1.323-2.507a32 32 0 0 1 1.906-2.748l.031-.04l.008-.01l.002-.002a.75.75 0 0 0-.71-1.208l-.005.001l-.022.004l-.091.014q-.123.018-.351.047c-.3.038-.723.083-1.204.113c-.981.061-2.137.054-3.021-.167"></svg:path>`,
})
export class MynauiSevenCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSevenDiamondSolidIcon],svg[mynaui-seven-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m-.858 5.782a.75.75 0 0 0-.364 1.456c1.116.279 2.46.272 3.479.208l.084-.005c-.311.445-.665.975-1.02 1.55c-.511.832-1.032 1.774-1.427 2.712c-.39.926-.684 1.91-.684 2.807a.75.75 0 1 0 1.5 0c0-.603.206-1.37.566-2.225c.355-.843.834-1.713 1.323-2.507a32 32 0 0 1 1.906-2.748l.031-.04l.008-.01l.002-.002a.75.75 0 0 0-.71-1.208l-.005.001l-.022.004l-.091.014q-.123.018-.351.047c-.3.038-.723.083-1.204.113c-.981.061-2.137.054-3.021-.167"></svg:path>`,
})
export class MynauiSevenDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSevenHexagonSolidIcon],svg[mynaui-seven-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.68 2.105a2.63 2.63 0 0 1 2.64 0l.001.001l6.611 3.8A2.65 2.65 0 0 1 21.25 8.2v7.603a2.66 2.66 0 0 1-1.318 2.291l-.003.002l-6.608 3.799h-.002a2.63 2.63 0 0 1-2.639 0h-.001l-6.608-3.8h-.003A2.64 2.64 0 0 1 2.75 15.8V8.198a2.66 2.66 0 0 1 1.318-2.291l.003-.002zm-.748 5.167a.75.75 0 0 0-.364 1.456c1.116.279 2.46.272 3.479.208l.084-.005c-.311.445-.665.975-1.02 1.55c-.511.832-1.032 1.774-1.427 2.712c-.39.926-.684 1.91-.684 2.807a.75.75 0 1 0 1.5 0c0-.603.206-1.37.566-2.225c.355-.843.834-1.713 1.323-2.507a32 32 0 0 1 1.906-2.748l.031-.04l.008-.01l.002-.002a.75.75 0 0 0-.71-1.208l-.005.001l-.022.004l-.091.014q-.123.018-.351.047c-.3.038-.723.083-1.204.113c-.981.061-2.137.054-3.021-.167"></svg:path>`,
})
export class MynauiSevenHexagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSevenOctagonSolidIcon],svg[mynaui-seven-octagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 2.408a2.3 2.3 0 0 1 .9-.158h6.126c.302 0 .602.036.9.158s.54.31.762.53l4.337 4.337c.22.221.408.463.53.762c.123.298.158.598.158.9v6.126c0 .313-.039.616-.163.914a2.3 2.3 0 0 1-.525.748l-4.337 4.337a2.3 2.3 0 0 1-.762.53a2.3 2.3 0 0 1-.9.158H8.937c-.313 0-.616-.039-.914-.163a2.3 2.3 0 0 1-.748-.525l-4.337-4.337a2.3 2.3 0 0 1-.53-.762a2.3 2.3 0 0 1-.158-.9V8.937c0-.313.039-.616.163-.914a2.3 2.3 0 0 1 .525-.748l4.337-4.337c.221-.22.463-.408.762-.53m1.895 4.864a.75.75 0 0 0-.364 1.456c1.116.279 2.46.272 3.479.208l.084-.005c-.311.445-.665.975-1.02 1.55c-.511.832-1.032 1.774-1.427 2.712c-.39.926-.684 1.91-.684 2.807a.75.75 0 1 0 1.5 0c0-.603.206-1.37.566-2.225c.355-.843.834-1.713 1.323-2.507a32 32 0 0 1 1.906-2.748l.031-.04l.008-.01l.002-.002a.75.75 0 0 0-.71-1.208l-.005.001l-.022.004l-.091.014q-.123.018-.351.047c-.3.038-.723.083-1.204.113c-.981.061-2.137.054-3.021-.167"></svg:path>`,
})
export class MynauiSevenOctagonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSevenSolidIcon],svg[mynaui-seven-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.522 6.818a.75.75 0 0 1 .91-.546c1.134.284 2.602.29 3.834.214a25 25 0 0 0 2.074-.22l.029-.005h.007a.75.75 0 0 1 .71 1.207l-.003.004l-.01.012l-.04.05l-.153.198a40 40 0 0 0-2.242 3.254c-.613.998-1.217 2.095-1.666 3.16c-.453 1.078-.722 2.064-.722 2.854a.75.75 0 0 1-1.5 0c0-1.085.356-2.287.84-3.436c.489-1.16 1.135-2.329 1.771-3.363c.53-.862 1.06-1.64 1.497-2.254q-.24.02-.499.036c-1.268.08-2.925.086-4.291-.255a.75.75 0 0 1-.546-.91"></svg:path>`,
})
export class MynauiSevenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSevenSquareSolidIcon],svg[mynaui-seven-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057m.565 5.022a.75.75 0 0 0-.364 1.456c1.116.279 2.46.272 3.479.208l.084-.005c-.311.445-.665.975-1.02 1.55c-.511.832-1.032 1.774-1.427 2.712c-.39.926-.684 1.91-.684 2.807a.75.75 0 1 0 1.5 0c0-.603.206-1.37.566-2.225c.355-.843.834-1.713 1.323-2.507a32 32 0 0 1 1.906-2.748l.031-.04l.008-.01l.002-.002a.75.75 0 0 0-.71-1.208l-.005.001l-.022.004l-.091.014q-.123.018-.351.047c-.3.038-.723.083-1.204.113c-.981.061-2.137.054-3.021-.167"></svg:path>`,
})
export class MynauiSevenSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiSevenWavesSolidIcon],svg[mynaui-seven-waves-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.565 2.075a3.33 3.33 0 0 1 2.87 0c.394.189.755.497 1.26.928l.079.066c.48.41.939.604 1.58.655l.102.008c.662.053 1.135.09 1.547.236a3.33 3.33 0 0 1 2.03 2.029c.145.412.182.885.235 1.547l.008.102c.051.641.246 1.1.655 1.58l.066.078c.431.506.74.867.928 1.261a3.33 3.33 0 0 1 0 2.87c-.189.394-.497.755-.928 1.26l-.066.079c-.418.49-.605.951-.655 1.58l-.008.102c-.053.662-.09 1.135-.236 1.547a3.33 3.33 0 0 1-2.029 2.03c-.412.145-.885.182-1.547.235l-.102.008c-.641.051-1.1.246-1.58.655l-.079.066c-.505.431-.866.74-1.26.928a3.33 3.33 0 0 1-2.87 0c-.394-.189-.755-.497-1.26-.928l-.079-.066a2.56 2.56 0 0 0-1.58-.655l-.102-.008c-.662-.053-1.135-.09-1.547-.236a3.33 3.33 0 0 1-2.03-2.029c-.145-.412-.182-.885-.235-1.547l-.008-.102a2.56 2.56 0 0 0-.655-1.58l-.066-.079c-.431-.505-.74-.866-.928-1.26a3.33 3.33 0 0 1 0-2.87c.189-.394.497-.755.928-1.26l.066-.079a2.56 2.56 0 0 0 .655-1.58l.008-.102c.053-.662.09-1.135.236-1.547a3.33 3.33 0 0 1 2.029-2.03c.412-.145.885-.182 1.547-.235l.102-.008a2.56 2.56 0 0 0 1.58-.655l.078-.066c.506-.431.867-.74 1.261-.928m-.633 5.197a.75.75 0 0 0-.364 1.456c1.116.279 2.46.272 3.479.208l.084-.005c-.311.445-.665.975-1.02 1.55c-.511.832-1.032 1.774-1.427 2.712c-.39.926-.684 1.91-.684 2.807a.75.75 0 1 0 1.5 0c0-.603.206-1.37.566-2.225c.355-.843.834-1.713 1.323-2.507a32 32 0 0 1 1.906-2.748l.031-.04l.008-.01l.002-.002a.75.75 0 0 0-.71-1.208l-.005.001l-.022.004l-.091.014q-.123.018-.351.047c-.3.038-.723.083-1.204.113c-.981.061-2.137.054-3.021-.167"></svg:path>`,
})
export class MynauiSevenWavesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShareSolidIcon],svg[mynaui-share-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8.75a3.25 3.25 0 1 0 2.002 5.81l.068.054l4.73 3.312a3.25 3.25 0 1 0 .617-1.4l-4.479-3.135c.2-.421.312-.893.312-1.391s-.112-.97-.312-1.391l4.48-3.136a3.25 3.25 0 1 0-.617-1.4L9.07 9.387l-.068.053A3.24 3.24 0 0 0 7 8.75"></svg:path>`,
})
export class MynauiShareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldCheckSolidIcon],svg[mynaui-shield-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.226 2.49l-.61.417a11.3 11.3 0 0 1-5.235 1.92a1.264 1.264 0 0 0-1.131 1.26v4.93c0 2.541 1.335 4.853 2.79 6.63c1.466 1.793 3.136 3.142 3.977 3.773a1.63 1.63 0 0 0 1.966 0c.841-.63 2.511-1.98 3.977-3.772c1.455-1.778 2.79-4.09 2.79-6.63V6.086c0-.64-.478-1.194-1.131-1.26a11.3 11.3 0 0 1-5.234-1.92l-.61-.417a1.37 1.37 0 0 0-1.55 0m2.955 6.402a.75.75 0 0 1 .169 1.047l-2.1 2.907a.974.974 0 0 1-1.522.072l-1.034-1.182a.75.75 0 0 1 1.128-.988l.6.684l1.712-2.371a.75.75 0 0 1 1.047-.169"></svg:path>`,
})
export class MynauiShieldCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldCrossedSolidIcon],svg[mynaui-shield-crossed-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.582 2.377a.75.75 0 0 1 .836 0l.961.646a11.44 11.44 0 0 0 5.238 1.885A1.26 1.26 0 0 1 19.75 6.16V11c0 3.004-1.929 5.688-3.709 7.544a24 24 0 0 1-3.54 3.022q-.041.03-.064.044l-.017.012l-.005.003l-.002.001L12 21l-.412.627l-.002-.002l-.006-.003l-.017-.012l-.065-.044l-.234-.163a24 24 0 0 1-3.305-2.859C6.179 16.688 4.25 14.004 4.25 11V6.16c0-.647.49-1.188 1.133-1.252a11.44 11.44 0 0 0 5.238-1.885zM12 21l-.412.627a.75.75 0 0 0 .824 0zm-.75-1.488V11.75H5.8c.28 2.125 1.701 4.15 3.241 5.756a23 23 0 0 0 2.209 2.006m7-9.262V6.377a12.94 12.94 0 0 1-5.5-1.973v5.846z"></svg:path>`,
})
export class MynauiShieldCrossedSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mynauiShieldMinusSolidIcon],svg[mynaui-shield-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.226 2.49a1.37 1.37 0 0 1 1.548 0l.61.417a11.3 11.3 0 0 0 5.235 1.92a1.264 1.264 0 0 1 1.131 1.26v4.93c0 2.541-1.335 4.853-2.79 6.63c-1.466 1.793-3.136 3.142-3.977 3.773a1.63 1.63 0 0 1-1.966 0c-.841-.63-2.51-1.98-3.977-3.772c-1.455-1.778-2.79-4.09-2.79-6.63V6.086c0-.64.478-1.194 1.131-1.26a11.3 11.3 0 0 0 5.234-1.92zM10 10.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiShieldMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
